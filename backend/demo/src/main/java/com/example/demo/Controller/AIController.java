// AiController.java
package com.example.demo.Controller;

//import com.example.demo.Service.AiService;
import com.example.demo.Service.AiService;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AIController {

  private final AiService aiService;

  public AIController(AiService aiService) {
    this.aiService = aiService;
  }

  @PostMapping("/ai-response")
  public Map<String, Object> getAiResponse(@RequestBody Map<String, String> request) {
    String userInput = request.get("input");
    List<String> tasks = aiService.generateChecklist(userInput);
    return Map.of("tasks", tasks);
  }
}
