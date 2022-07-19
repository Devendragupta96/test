import { Injectable } from "@nestjs/common";
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "nestjs-typegoose";
import { User } from "./users.model";



@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
    ) { }

    
    async getFromUserService() {
        return "hello from users service";
    }


    async saveUser(user) {
        try {
            const newUser = await new this.userModel(user);
            const data = await newUser.save();
            return data
        } catch (e) {
            console.log(e)
        }
    }

}