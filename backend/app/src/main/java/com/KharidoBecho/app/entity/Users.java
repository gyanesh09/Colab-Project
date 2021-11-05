package com.KharidoBecho.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="RegisteredUsers")
public class Users {

    @Id
    @GeneratedValue
    private int id;
    private String FirstName;
    private String LastName;
    private String Password;
    private String Email;

}
