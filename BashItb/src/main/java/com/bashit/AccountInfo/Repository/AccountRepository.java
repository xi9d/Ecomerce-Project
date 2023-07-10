package com.bashit.AccountInfo.Repository;

import com.bashit.AccountInfo.Model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {
    Account findByEmail(String email);
}
