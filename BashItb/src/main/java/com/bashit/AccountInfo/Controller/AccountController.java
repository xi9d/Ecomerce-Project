package com.bashit.AccountInfo.Controller;

import com.bashit.AccountInfo.Model.Account;
import com.bashit.AccountInfo.Service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService service;
    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account){
        Account _account = service.addAccount(account);
        return ResponseEntity.ok(_account);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteAccount(@PathVariable Long id){
        boolean deleted = service.deleteAccount(id);
        String status = "Deleted";
        Map<String, Boolean> results = new HashMap<>();
        results.put(status,deleted);
        return ResponseEntity.ok(results);
    }

}
