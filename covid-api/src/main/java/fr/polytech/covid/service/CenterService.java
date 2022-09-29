package fr.polytech.covid.service;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.repository.CenterRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class CenterService {

    private final CenterRepository centerRepository;

    public CenterService(CenterRepository centerRepository) {
        this.centerRepository = centerRepository;
    }

    public List<Center> getCenters(){
        List<Center> centers = new ArrayList<>();
        centerRepository.findAll().forEach(centers::add);
        return  centers;
    }

    public Center getCenter(int id){
        return centerRepository.findById(id).orElse(null);
    }

    public void addCenter(String name, String city){
        Center center = new Center(name, city);
        addCenter(center);
    }

    public void addCenter(Center center) {
        centerRepository.save(center);
    }


    public void updateCenter(int id, String name, String city){
        Center center = this.getCenter(id);
        updateCenter(center,name,city);
    }

    public void updateCenter(Center center,String name, String city){
        if(center != null) {
            name = (name == null || Objects.equals(name, "")) ? center.getName() : name ;
            city = (city == null || Objects.equals(city, "")) ? center.getCity() : city ;
            center.setName(name);
            center.setCity(city);
            updateCenter(center);
        }
    }
    public void updateCenter(Center center){
        centerRepository.save(center);
    }

    public void deleteCenter(int id){
        centerRepository.deleteById(id);
    }

}
