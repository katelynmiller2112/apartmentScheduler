package controller;

import org.springframework.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ScheduleController {

    @PostMapping(path="/scheduler")
    public String getSchedule(){

        return "Success";
    }



}
