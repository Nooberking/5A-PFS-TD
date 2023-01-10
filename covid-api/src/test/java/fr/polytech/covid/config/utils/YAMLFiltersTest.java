package fr.polytech.covid.config.utils;


import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


class YAMLFiltersTest {

    YAMLFilters testFilters = new YAMLFilters("configFiles/UrlFiltersTest.yaml");

    @Test
    public void GivenYAMLUrlFile_ShouldHaveExpectedData(){

        // Arrange
        ArrayList<String> singleUrl = new ArrayList<>();
        ArrayList<String> multipleUrls = new ArrayList<>();

        singleUrl.add("/url/single/success");
        multipleUrls.add("/url/multiple/1/success");
        multipleUrls.add("/url/multiple/2/success");
        multipleUrls.add("/url/multiple/3/success");


        Map<String, ArrayList<String>> expectedData = new HashMap<>();
        expectedData.put("single_url_restriction", singleUrl);
        expectedData.put("multiple_urls_restriction", multipleUrls);

        // Act
        Map<String, ArrayList<String>>actualData =  testFilters.loadData("configFiles/UrlFiltersTest.yaml");

        // Assert
        Assert.isTrue(expectedData.equals(actualData),
                "Not expected data importation.");

    }

    @Test
    public void GivenMultipleUrlFilter_ShouldGetExpectedUrls() {

        // Arrange
        ArrayList<String> expectedUrls = new ArrayList<>();
        expectedUrls.add("/url/multiple/1/success");
        expectedUrls.add("/url/multiple/2/success");
        expectedUrls.add("/url/multiple/3/success");

        // Act
        ArrayList<String> actualUrls = testFilters.getUrls("multiple_urls_restriction");

        // Assert
        Assert.isTrue(expectedUrls.equals(actualUrls),
                "Not expected filter result received.");
    }

    @Test
    public void GivenSingleUrlFilter_ShouldGetExpectedUrl(){

        // Arrange
        String expectedUrl = "/url/single/success";

        // Act
        String actualUrl = testFilters.getUrl("single_url_restriction");

        // Assert
        Assert.isTrue(expectedUrl.equals(actualUrl),
                "Not expected filter result received.");
    }
}
