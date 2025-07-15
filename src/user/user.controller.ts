import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Headers,
  HttpCode,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';

import * as svgCaptcha from 'svg-captcha';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('code')
  getCode(@Req() req, @Res() res) {
    const captcha = svgCaptcha.create({
      size: 6,
      fontSize: 50,
      width: 100,
      height: 40,
      background: 'green',
    });
    

    req.session.code = captcha.text;
 
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(@Req() req, @Body() body) {
    if (req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        message: "验证码正确"
      }
    } else {
      return {
        message: "验证码错误"
      }
    }
 
  }


}
