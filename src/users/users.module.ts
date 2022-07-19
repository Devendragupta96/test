import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UserService } from './users.service';

@Module({
  imports: [
    TypegooseModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule { }
