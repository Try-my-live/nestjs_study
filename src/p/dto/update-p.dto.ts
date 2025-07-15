import { PartialType } from '@nestjs/swagger';
import { CreatePDto } from './create-p.dto';

export class UpdatePDto extends PartialType(CreatePDto) {}
