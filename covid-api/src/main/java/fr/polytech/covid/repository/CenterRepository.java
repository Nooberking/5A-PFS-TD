package fr.polytech.covid.repository;

import fr.polytech.covid.entity.Center;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CenterRepository extends CrudRepository<Center, Integer> {
    List<Center> findByCityContainsIgnoreCase(String city);


}
