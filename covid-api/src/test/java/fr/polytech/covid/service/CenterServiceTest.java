package fr.polytech.covid.service;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.repository.CenterRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.util.Assert;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

import static org.mockito.Mockito.*;

class CenterServiceTest {
    @Mock
    private CenterRepository centerRepository;
    @InjectMocks
    private CenterService centerService;

    List<Center> initialCenters;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        Center center1 = new Center("a", "a");
        Center center2 = new Center("b","b");
        Center center3 = new Center("c","c");
        Center center4 = new Center("name", "city");
        initialCenters = List.of(center1, center2, center3, center4);
        AtomicInteger id  = new AtomicInteger();
        initialCenters.forEach(center -> {
            center.setId(id.get());
            id.set(id.get() + 1);
        });
    }

    @Test
    void shouldFindAndReturnAllCenters() {
        // Arrange
        List<Center> expectedCenters = initialCenters;
        when(centerRepository.findByOrderByNameAsc()).thenReturn(expectedCenters);

        // Act
        List<Center> result = centerService.getCenters();

        // Assert
        Assert.isTrue(result.size() ==  4,
                "Not  expected result size");

        Assert.isTrue(result.get(0).getName().equals("a") && result.get(0).getCity().equals("a"),
                "Not expected first element.");

        verify(centerRepository, times(1)).findByOrderByNameAsc();
        verifyNoMoreInteractions(centerRepository);
    }
 /*
    @Test
    public void givenCity_ShouldReturnExpectedCenters() {
        // Arrange
        Predicate<Center> byCityContains = center -> center.getCity().contains("c");
        List<Center> expectedCenters = initialCenters.stream().filter(byCityContains).toList();
        when(centerRepository.findByCityContainsIgnoreCaseOrderByNameAsc("c")).thenReturn(expectedCenters);

        // Act
        List<Center> result = centerService.getCenters("c");

        // Assert
        Assert.isTrue(result.size() == 2,
                "Not expected result size");

        Assert.isTrue(result.get(0).getName().equals("c") && result.get(0).getCity().equals("c"),
                "Not expected first element.");
        verify(centerRepository,times(0)).findByOrderByNameAsc();
        verify(centerRepository, times(1)).findByCityContainsIgnoreCaseOrderByNameAsc("c");
        verifyNoMoreInteractions(centerRepository);
    }

    @Test
    public void givenCenterName_ShouldReturnExpectedCenters(){
        // Arrange
        Predicate<Center> byNameContains = center -> center.getName().contains("a");
        List<Center> expectedCenters = initialCenters.stream().filter(byNameContains).toList();
        when(centerRepository.findByNameContainsIgnoreCaseOrderByNameAsc("a")).thenReturn(expectedCenters);

        // Act
        List<Center> result = centerService.getCentersByName("a");

        // Assert
        Assert.isTrue(result.size() == 2,
                "Not expected result size");

        Assert.isTrue(result.get(0).getName().equals("a") && result.get(0).getCity().equals("a"),
                "Not expected first element.");
        verify(centerRepository,times(0)).findByOrderByNameAsc();
        verify(centerRepository, times(1)).findByNameContainsIgnoreCaseOrderByNameAsc("a");
        verifyNoMoreInteractions(centerRepository);
    }


  */
    @Test
    public void givenCenterId_ShouldReturnExpectedCenter() {
        // Arrange
        int id = new Random().nextInt(4);
        Optional<Center> expectedCenter = Optional.of(initialCenters.get(id));
        when(centerRepository.findById(id)).thenReturn(expectedCenter);

        // Act
        Center actualCenter = centerService.getCenter(id);

        //Assert
        Assert.isTrue(Objects.nonNull(actualCenter),
                "Returned center is null.");
        Assert.isTrue(actualCenter.getId() == id,
                "Not expected center.");
        verify(centerRepository,times(1)).findById(id);
        verifyNoMoreInteractions(centerRepository);
    }

    @Test
    public void givenCenter_ShouldSaveCenter(){
        // Arrange
        Center expectedCenter = new Center();
        when(centerRepository.save(expectedCenter)).thenReturn(expectedCenter);

        // Act
        centerService.addCenter(expectedCenter);
        centerService.updateCenter(expectedCenter);

        // Assert
        verify(centerRepository, times(2)).save(expectedCenter);
        verifyNoMoreInteractions(centerRepository);
    }

    @Test
    public void givenCenterID_ShouldDeleteCenter(){
        // Arrange
        doNothing().when(centerRepository).deleteById(anyInt());

        // Act
        centerService.deleteCenter(new Random().nextInt());

        // Assert
        verify(centerRepository, times(1)).deleteById(anyInt());
        verifyNoMoreInteractions(centerRepository);
    }
}