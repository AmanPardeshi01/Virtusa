package com.example.day29;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {

    // Maps to "/app/sendMessage" and sends a message to "/topic/notifications"
    @MessageMapping("/sendMessage")
    @SendTo("/topic/notifications")
    public String sendMessage(String message) {
        // Log the incoming message
        System.out.println("Message received: " + message);
        return message;  // This will be broadcasted to all subscribers of /topic/notifications
    }
}
