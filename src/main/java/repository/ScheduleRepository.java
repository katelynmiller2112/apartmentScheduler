package repository;

import org.springframework.data.repository.CrudRepository;
import model.ScheduleModel;

public interface ScheduleRepository extends CrudRepository<ScheduleModel,Long> {
}
