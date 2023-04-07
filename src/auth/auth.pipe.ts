import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { LoginDto } from './dto/login.dto';
import { validate } from 'class-validator';

@Injectable()
export class loginPipe implements PipeTransform {
  async transform(value: any, metadata: any) {
    const data = plainToInstance(LoginDto, value);
    console.log(data);
    const validatedData = await validate(data, { whitelist: true });
    console.log(data);
    if (validatedData.length > 0) throw new Error('SOMETHING WRONG');
    console.log(validatedData);
    return data;
  }
}
