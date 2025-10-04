// AiService.java
package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service
public class AiService {

        @Value("${openrouter.api.key}")
        private String openRouterApiKey;

        public List<String> generateChecklist(String goal) {
                goal = goal + "Dont ask any return Questions prepare thelist in a step-by-step format for daily bases, also dont use any special characters in the list, just use numbers and text. Also make sure each point is short and concise.";
                String url = "https://openrouter.ai/api/v1/chat/completions";

                // Request body for OpenRouter
                Map<String, Object> body = new HashMap<>();
                body.put("model", "openai/gpt-oss-20b");
                body.put("messages", List.of(
                                Map.of("role", "user", "content",
                                                "Create a step-by-step daily checklist to achieve: " + goal)));

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.setBearerAuth(openRouterApiKey);

                HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(body, headers);
                RestTemplate restTemplate = new RestTemplate();

                try {
                        ResponseEntity<Map> response = restTemplate.exchange(
                                        url, HttpMethod.POST, requestEntity, Map.class);

                        // Extract AI text
                        Map<String, Object> choices = ((List<Map<String, Object>>) response.getBody().get("choices"))
                                        .get(0);
                        String content = (String) ((Map<String, Object>) choices.get("message")).get("content");

                        // Split checklist into list items
                        return Arrays.stream(content.split("\n"))
                                        .map(String::trim)
                                        .filter(s -> !s.isEmpty())
                                        .toList();

                } catch (Exception e) {
                        e.printStackTrace();
                        return List.of("Error generating checklist from AI.");
                }
        }
}
