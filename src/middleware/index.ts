import {Injectable,NestMiddleware } from '@nestjs/common'
 
import {Request,Response,NextFunction} from 'express'
 
 
@Injectable()
export class Logger implements NestMiddleware{
  use (req:Request,res:Response,next:NextFunction) {
    console.log({
      method: req.method,
      url: req.originalUrl,
      headers: this.safeHeaders(req.headers), // 过滤敏感头
      body: req.body
    });
    next()
  }
  
  private safeHeaders(headers: any) {
    const { ...safeHeaders } = headers;
    return safeHeaders;
  }
}