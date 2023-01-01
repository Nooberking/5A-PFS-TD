package fr.polytech.covid.repository;

import fr.polytech.covid.entity.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

    List<Employee> findDistinctByRole_IdAndCenter_Id(int id, int id1);

    List<Employee> findByRole_Id(int id);

    Optional<Employee> findByUsername(final String username);
}
