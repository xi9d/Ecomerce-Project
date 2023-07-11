//package com.bashit.AccountInfo.Config;
//
//import com.bashit.AccountInfo.Model.Account;
//import com.bashit.AccountInfo.Repository.AccountRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class AccountDetailsService implements UserDetailsService {
//    private final AccountRepository accountRepository;
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Account account = accountRepository.findByEmail(email);
//        if (account ==null){
//            throw  new UsernameNotFoundException("Could not find user with email "+email);
//        }
//        return new AccountDetails(account);
//    }
//}
