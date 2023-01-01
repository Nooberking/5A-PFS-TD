package fr.polytech.covid.service;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.entity.Employee;
import fr.polytech.covid.entity.Role;
import fr.polytech.covid.repository.CenterRepository;
import fr.polytech.covid.repository.EmployeeRepository;
import fr.polytech.covid.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.*;

@Service
public class EmployeeService implements UserDetailsService {
    private static Logger log = LoggerFactory.getLogger(EmployeeService.class);
    private final EmployeeRepository employeeRepository;
    private final RoleRepository roleRepository;
    private final CenterRepository centerRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public EmployeeService(
            EmployeeRepository employeeRepository,
            RoleRepository roleRepository,
            CenterRepository centerRepository,
            PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.roleRepository = roleRepository;
        this.centerRepository = centerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void createUserDefault() {
        if (employeeRepository.findByUsername("user").isEmpty()) {
            log.info("Création de l'employé par defaut");
            Role doctorRole = roleRepository.findByName("DOCTOR");
            Center center = centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test").get(0);
            createEmployee("user", "user", "test", doctorRole, "password", center);
        }
    }
    @PostConstruct
    public void createAdminDefault(){
        if (employeeRepository.findByUsername("admin").isEmpty()) {
            log.info("Création de l'admin par défaut");
            Role adminRole = roleRepository.findByName("ADMIN");
            Center center = centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test").get(0);
            createEmployee("admin", "admin", "test", adminRole, "password", center);
        }
    }

    @PostConstruct
    public void createSuperAdminDefault() {
        if(employeeRepository.findByUsername("super_admin").isEmpty()){
            log.info("Création du super admin par défaut");
            Employee superAdmin = new Employee();
            Role superAdminRole = roleRepository.findByName("SUPER_ADMIN");
            createEmployee("super_admin","super_admin","test",superAdminRole,"password",null);
        }
    }

    public void createEmployee(
            String username,
            String firstName,
            String lastName,
            Role role,
            String password,
            @Nullable Center center){
        Employee employee = new Employee();
        employee.setUsername(username);
        employee.setFirstName(firstName);
        employee.setLastName(lastName);
        employee.setRoles(Collections.singletonList(role));
        employee.setPassword(passwordEncoder.encode(password));
        employee.setCenter(center);
        this.employeeRepository.save(employee);


    }


    @Override
    public UserDetails loadUserByUsername(final String username)
        throws UsernameNotFoundException{
        log.info("récupération de {}", username);

        Optional<Employee> optionalEmployee = employeeRepository.findByUsername(username);
        if(optionalEmployee.isPresent()){
            Employee employee = optionalEmployee.get();
            return new User(employee.getUsername(), employee.getPassword(),getAutorities(employee.getRoles()));
        } else {
            throw new UsernameNotFoundException("L'utilisateur" + username +"n'existe pas");
        }
    }

    private Collection<? extends GrantedAuthority> getAutorities(Collection<Role> roles) {
      List<GrantedAuthority> authorities = new ArrayList<>();
      roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())));
      return authorities;
    }


}
