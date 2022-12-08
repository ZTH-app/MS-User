import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Userdb as User, UserDocument } from '../schemas/user.schema';
import fetch from 'node-fetch';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(course: User) {
    const createdUser = new this.userModel(course);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, course: UpdateUserDto): Promise<void> {
    await this.userModel
      .updateOne(
        {
          _id: id,
        },
        course,
      )
      .exec();
  }

  async test(): Promise<string> {
    var myInit = { method: 'GET', mode: 'cors', cache: 'default' };
    let test = await fetch('http://127.0.0.1:3001/', myInit).then(
      (value: string) => {
        return value;
      },
    );
    return await test.json();
  }
}
