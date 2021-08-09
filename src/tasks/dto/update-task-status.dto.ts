import { TaskStatus } from '../task-status.enum';
import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, { message: `Статус должен быть одним из "${Object.keys(TaskStatus).join(' | ',)}"`, })
  status: TaskStatus;
}
