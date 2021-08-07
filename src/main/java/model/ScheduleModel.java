package model;

import javax.persistence.Entity;

@Entity
public class ScheduleModel {

    public ScheduleModel(){

    }

    public int scheduleId;
    public String scheduleName;
    public int userId;
    
}
