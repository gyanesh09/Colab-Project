package com.KharidoBecho.app.service;

import com.KharidoBecho.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebsiteService {

    @Autowired
    private UserRepository repo;



}
