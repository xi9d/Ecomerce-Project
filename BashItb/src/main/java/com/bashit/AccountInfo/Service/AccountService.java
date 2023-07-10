package com.bashit.AccountInfo.Service;

import com.bashit.AccountInfo.Model.Account;

public interface AccountService {
    Account addAccount(Account account);

    boolean deleteAccount(Long id);
}
