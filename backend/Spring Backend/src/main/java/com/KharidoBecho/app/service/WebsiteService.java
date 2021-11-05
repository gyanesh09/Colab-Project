package com.KharidoBecho.app.service;

import com.KharidoBecho.app.entity.Users;
import com.KharidoBecho.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebsiteService {

    @Autowired
    private UserRepository repository;

    public List<Users> getUsers() {
        return repository.findAll();
    }

}
