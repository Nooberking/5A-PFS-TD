package fr.polytech.covid.repository;

import fr.polytech.covid.entity.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Integer> {
    Role findByName(String name);


}