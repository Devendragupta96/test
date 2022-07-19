import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb+srv://Devendra:devendra@cluster0.igjip.mongodb.net/?retryWrites=true&w=majority"),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
