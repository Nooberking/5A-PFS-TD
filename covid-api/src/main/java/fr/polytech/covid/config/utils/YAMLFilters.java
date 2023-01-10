package fr.polytech.covid.config.utils;

import org.springframework.core.io.ClassPathResource;
import org.yaml.snakeyaml.Yaml;

import java.io.*;
import java.util.ArrayList;
import java.util.Map;
import java.util.Objects;

public class YAMLFilters {

    private final Map<String, ArrayList<String>> data ;

    public YAMLFilters(String urlFiltersFile) {

        urlFiltersFile = Objects.requireNonNullElse(urlFiltersFile, ("configFiles/UrlFilters.yaml"));


        this.data = loadData(urlFiltersFile);

    }

    protected Map<String, ArrayList<String>> loadData(String urlFiltersFile)  {
        InputStream inputStream;
        try {
            inputStream = new ClassPathResource(urlFiltersFile).getInputStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return new Yaml().load(inputStream);
    }

    public ArrayList<String> getUrls (String filter){
        return data.getOrDefault(filter,new ArrayList<>());
    }
    public String getUrl(String filter){
        return data.getOrDefault(filter,new ArrayList<>()).get(0);
    }

}
