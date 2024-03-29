package fr.polytech.covid.config;

import fr.polytech.covid.config.utils.YAMLFilters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private static final Logger log = LoggerFactory.getLogger(SecurityConfig.class);
    private final YAMLFilters filters  = new YAMLFilters(null);

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, UserDetailsService userDetailsService) throws Exception {
        http
                .authorizeHttpRequests((authz) -> authz
                        .mvcMatchers(filters.getUrl("public")).permitAll()
                        .mvcMatchers(HttpMethod.GET, filters.getUrl("doctor_get_restricted")).hasAuthority("DOCTOR")
                        .mvcMatchers(HttpMethod.PUT, filters.getUrl("doctor_put_restricted")).hasAuthority("DOCTOR")
                        .mvcMatchers(filters.getUrl("admin_restricted")).hasAuthority("ADMIN")
                        .mvcMatchers(HttpMethod.GET, filters.getUrl("admin_get_restricted")).hasAuthority("ADMIN")
                        .mvcMatchers(HttpMethod.DELETE, filters.getUrl("admin_delete_restricted")).hasAuthority("ADMIN")
                        .mvcMatchers(filters.getUrls("superAdmin_restricted").toArray(new String[0])).hasAuthority("SUPER_ADMIN")
                        .mvcMatchers(filters.getUrl("restricted")).authenticated())
                .httpBasic(Customizer.withDefaults())
                .cors().disable()
                .csrf().disable()

                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {return new BCryptPasswordEncoder();}
}
