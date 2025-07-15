import { Controller, Get,Res, Post, Body, Patch, Param, Delete,UseInterceptors,UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import {FileInterceptor} from '@nestjs/platform-express'
import type  { Response } from 'express'; // 新增导入
import  { join,resolve  } from 'path'
import { existsSync } from 'fs';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload (@UploadedFile() file) {
    console.log(file)
    return true
  }


  @Get('export')
  downLoad(@Res() res: Response) {
    // 指向 src/images 目录
    const filePath = join(process.cwd(), 'src/images/1.png');
    
    if (!existsSync(filePath)) {
      return res.status(404).json({
        code: 404,
        message: `文件不存在: ${filePath}`
      });
    }
    
    res.download(filePath);
  }

}