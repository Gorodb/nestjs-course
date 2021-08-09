import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsEnum, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: `Статус должен быть одним из "${Object.keys(TaskStatus).join(
      ' | ',
    )}"`,
  })
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
