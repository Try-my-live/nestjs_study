import {IsNotEmpty,IsString} from 'class-validator'
export class CreatePDto {
    @IsNotEmpty()//验证是否为空
    @IsString() //是否为字符串
    name:string;
 
    @IsNotEmpty()
    age:number
}