package com.bashit.AccountInfo.Service;

import com.bashit.AccountInfo.Model.Account;
import com.bashit.AccountInfo.Repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    public Account addAccount(Account account) {
        Account _account =accountRepository.save(account);
        return _account;
    }

    @Override
    public boolean deleteAccount(Long id) {
        Optional<Account> optionalAccount = accountRepository.findById(id);
        if (optionalAccount.isPresent()){
            Account  account = optionalAccount.get();
            accountRepository.delete(account);
            return true;
        }
        return false;
    }
}
