package com.example.myproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebsiteController {

	@GetMapping("/home")
	public String landingPage() {
		return "Kharido Becho.com";
	}
}
