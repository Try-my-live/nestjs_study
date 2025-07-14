import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Headers,HttpCode
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Get(':id')
  findAll(@Headers() header, @Request() req) {
    console.log(header['token'],req.params);

    return {
      code: 200,
    };
  }

  @Get()
  @HttpCode(500)
  findOne() {
    
    return {
      code: 200,
      data: 1,
    };
  }
}
