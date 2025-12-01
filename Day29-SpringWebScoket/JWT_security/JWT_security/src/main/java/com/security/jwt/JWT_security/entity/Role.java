package com.security.jwt.JWT_security.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "role_name", nullable = false, unique = true)
    private String roleName; // e.g. ROLE_USER, ROLE_ADMIN

    public Role() {
    }
    public Role(String roleUser) {
        this.roleName=roleUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    // getters/setters
}
