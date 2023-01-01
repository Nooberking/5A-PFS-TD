package fr.polytech.covid.entity;

import javax.persistence.*;

@Entity
public class Employee {

    @Id
    @GeneratedValue
    private int id;

    private String username;
    private String firstName;
    private String lastName;
    @ManyToOne
    @JoinColumn(name="center_id")
    private Center center;
    private String password;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(
            name = "employees_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"))
    private Role role;

    public Employee() {
    }

    public Employee(String username,String firstName, String lastName, Center center, String password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.center = center;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Center getCenter() {
        return center;
    }

    public void setCenter(Center center) {
        this.center = center;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
