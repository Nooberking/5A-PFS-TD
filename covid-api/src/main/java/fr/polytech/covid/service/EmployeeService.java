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
    private final CenterRepository centerRepository;
    private final PasswordEncoder passwordEncoder;

    private Role doctorRole;

    private Role adminRole;

    private Role superAdminRole;

    @Autowired
    public EmployeeService(
            EmployeeRepository employeeRepository,
            RoleRepository roleRepository,
            CenterRepository centerRepository,
            PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.centerRepository = centerRepository;
        this.passwordEncoder = passwordEncoder;

        this.doctorRole = roleRepository.findByName("DOCTOR");
        this.adminRole = roleRepository.findByName("ADMIN");
        this.superAdminRole = roleRepository.findByName("SUPER_ADMIN");
    }

    @PostConstruct
    public void createUserDefault() {
        if (employeeRepository.findByUsername("user").isEmpty()) {
            log.info("Création de l'employé par defaut");
            Center center = centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test").get(0);
            createEmployee("user", "user", "test", this.doctorRole, "password", center);
        }
    }
    @PostConstruct
    public void createAdminDefault(){
        if (employeeRepository.findByUsername("admin").isEmpty()) {
            log.info("Création de l'admin par défaut");
            Center center = centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test").get(0);
            createEmployee("admin", "admin", "test", this.adminRole, "password", center);
        }
    }

    @PostConstruct
    public void createSuperAdminDefault() {
        if(employeeRepository.findByUsername("super_admin").isEmpty()){
            log.info("Création du super admin par défaut");
            Employee superAdmin = new Employee();
            createEmployee("super_admin", "super_admin", "test", this.superAdminRole, "password", null);
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
        employee.setRole(role);
        employee.setPassword(passwordEncoder.encode(password));
        employee.setCenter(center);
        this.employeeRepository.save(employee);
    }

    public void createEmployee(Employee employee){
        Employee savedEmployee = new Employee();
        copyEmployeeInfo(employee, savedEmployee);
    }

    public void updateEmployee(Employee employee){
        Employee registeredEmployee = this.employeeRepository.findById(employee.getId()).orElse(new Employee());
        copyEmployeeInfo(employee, registeredEmployee);
    }

    protected void copyEmployeeInfo(Employee newEmployee, Employee oldEmployee) {
        oldEmployee.setUsername(newEmployee.getUsername());
        oldEmployee.setFirstName(newEmployee.getFirstName());
        oldEmployee.setLastName(newEmployee.getLastName());
        oldEmployee.setRole(newEmployee.getRole());
        if(!newEmployee.getPassword().isEmpty())
            oldEmployee.setPassword(passwordEncoder.encode(newEmployee.getPassword()));
        oldEmployee.setCenter(newEmployee.getCenter());
        this.employeeRepository.save(oldEmployee);
    }

    public void deleteEmployee(Employee employee){
        Optional<Employee> savedEmployee = this.employeeRepository.findById(employee.getId());
        if(savedEmployee.isPresent() && savedEmployee.get() == employee)
            this.employeeRepository.delete(employee);
    }

    public List<Employee> getEmployees() {
        ArrayList<Employee> employees = new ArrayList<>();
        this.employeeRepository.findAll().forEach(employees::add);
        return employees;
    }

    public List<Employee> getAdministrators(){
        return this.employeeRepository.findByRole_Id(this.adminRole.getId());
    }

    public List<Employee> getDoctorsByCenter(Center center){
        return this.employeeRepository.findDistinctByRole_IdAndCenter_Id(
                this.doctorRole.getId(),
                center.getId()
        );
    }
    public Employee loadEmployee(String authInfos) {
        String username = getUsername(authInfos);
        Optional<Employee> optionalEmployee = employeeRepository.findByUsername(username);
        if(optionalEmployee.isPresent()){
            return optionalEmployee.get();
        }else {
            throw new UsernameNotFoundException("L'utilisateur " + username + " n'existe pas.");
        }
    }

    private String getUsername(String authInfos){
        String encodedAuthInfos = authInfos.replace("Basic ","");
        String decodedAuthInfos = new String(Base64.getDecoder().decode(encodedAuthInfos));
        return decodedAuthInfos.split(":")[0];

    }

    @Override
    public UserDetails loadUserByUsername(final String username)
        throws UsernameNotFoundException{
        log.info("récupération de {}", username);

        Optional<Employee> optionalEmployee = employeeRepository.findByUsername(username);
        if(optionalEmployee.isPresent()){
            Employee employee = optionalEmployee.get();
            return new User(employee.getUsername(),
                    employee.getPassword(),
                    getAutorities(Collections.singletonList(employee.getRole())));
        } else {
            throw new UsernameNotFoundException("L'utilisateur " + username +" n'existe pas");
        }
    }

    private Collection<? extends GrantedAuthority> getAutorities(Collection<Role> roles) {
      List<GrantedAuthority> authorities = new ArrayList<>();
      roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())));
      return authorities;
}


}
