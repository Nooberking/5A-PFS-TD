package fr.polytech.covid.service;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.entity.Employee;
import fr.polytech.covid.entity.Role;
import fr.polytech.covid.repository.CenterRepository;
import fr.polytech.covid.repository.EmployeeRepository;
import fr.polytech.covid.repository.RoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

public class EmployeeServiceTest {



    private  Role mockDoctorRole;

    private Role mockAdminRole;


    private Role mockSuperAdminRole;


    private Center mockCenter;

    @Mock
    private Employee mockEmployee;

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private RoleRepository roleRepository;

    @Mock
    private CenterRepository centerRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private  EmployeeService employeeService;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockDoctorRole = new Role();
        mockDoctorRole.setId(1);
        mockDoctorRole.setName("DOCTOR");

        mockAdminRole = new Role();
        mockAdminRole.setId(2);
        mockAdminRole.setName("ADMIN");

        mockSuperAdminRole = new Role();
        mockSuperAdminRole.setId(3);
        mockSuperAdminRole.setName("SUPER_ADMIN");

        mockCenter = new Center();
        mockCenter.setName("Centre de test");
        mockCenter.setId(1);

        mockEmployee.setPassword("deded");



    }

    @Test
    public void whenUserDoesNotExist_ShouldCreateDefaultUser(){
        // Arrange
        when(employeeRepository.findByUsername(anyString())).thenReturn(Optional.empty());
        when(centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test")).thenReturn((List.of(mockCenter)));
        when(employeeRepository.save(any())).thenReturn(null);

        // Act
        employeeService.createUserDefault();

        // Assert
        verify(employeeRepository, times(1)).findByUsername("user");
        verify(centerRepository, times(1)).findByNameContainsIgnoreCaseOrderByNameAsc(anyString());
        verify(employeeRepository, times(1)).save(any());

    }

    @Test
    public void whenUserExist_ShouldNotCreateDefaultUser(){
        // Arrange
        when(employeeRepository.findByUsername(anyString())).thenReturn(Optional.of(new Employee()));

        // Act
        employeeService.createUserDefault();

        // Assert
        verify(employeeRepository, times(1)).findByUsername("user");
        verifyNoInteractions(centerRepository);
        verifyNoMoreInteractions(employeeRepository);

    }

    @Test
    public void whenAdminDoesNotExist_ShouldCreateDefaultAdmin(){
        // Arrange
        when(employeeRepository.findByUsername(anyString())).thenReturn(Optional.empty());
        when(centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test")).thenReturn((List.of(mockCenter)));
        when(employeeRepository.save(any())).thenReturn(null);

        // Act
        employeeService.createAdminDefault();

        // Assert
        verify(employeeRepository, times(1)).findByUsername("admin");
        verify(centerRepository, times(1)).findByNameContainsIgnoreCaseOrderByNameAsc(anyString());
        verify(employeeRepository, times(1)).save(any());

    }

    @Test
    public void whenAdminExist_ShouldNotCreateDefaultAdmin(){
        // Arrange
        when(employeeRepository.findByUsername(anyString())).thenReturn(Optional.of(new Employee()));

        // Act
        employeeService.createAdminDefault();

        // Assert
        verify(employeeRepository, times(1)).findByUsername("admin");
        verifyNoInteractions(centerRepository);
        verifyNoMoreInteractions(employeeRepository);

    }

    @Test
    public void whenSuperAdminDoesNotExist_ShouldCreateDefaultSuperAdmin(){
        // Arrange
        when(employeeRepository.findByUsername(anyString())).thenReturn(Optional.empty());
        when(centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("Centre de test")).thenReturn((List.of(mockCenter)));
        when(employeeRepository.save(any())).thenReturn(null);

        // Act
        employeeService.createSuperAdminDefault();

        // Assert
        verify(employeeRepository, times(1)).findByUsername("super_admin");
        verify(employeeRepository, times(1)).save(any());

    }

    @Test
    public void whenSuperAdminExist_ShouldNotCreateDefaultSuperAdmin(){
        // Arrange
        when(employeeRepository.findByUsername(anyString())).thenReturn(Optional.of(new Employee()));

        // Act
        employeeService.createSuperAdminDefault();

        // Assert
        verify(employeeRepository, times(1)).findByUsername("super_admin");
        verifyNoInteractions(centerRepository);
        verifyNoMoreInteractions(employeeRepository);

    }

}
