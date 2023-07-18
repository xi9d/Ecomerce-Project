package com.bashit.AccountInfo.auth;

import com.bashit.AccountInfo.Config.JwtTokenProvider;
import com.bashit.AccountInfo.Model.Account;
import com.bashit.AccountInfo.Model.Role;
import com.bashit.AccountInfo.Repository.AccountRepository;
import com.bashit.AccountInfo.Token.Token;
import com.bashit.AccountInfo.Token.TokenRepository;
import com.bashit.AccountInfo.Token.TokenType;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AccountRepository accountRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request) {

        var user = Account.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        var savedUser = accountRepository.save(user);
        var jwtToken = jwtTokenProvider.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));

        var account = accountRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtTokenProvider.generateToken(account);
        revokeAllUserTokens(account);
        saveUserToken(account, jwtToken);
        return AuthenticationResponse.builder().token(jwtToken).build();

    }
    private void saveUserToken(Account account, String jwtToken) {
        var token = Token.builder()
                .account(account)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }
    private void revokeAllUserTokens(Account account) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(account.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
}
