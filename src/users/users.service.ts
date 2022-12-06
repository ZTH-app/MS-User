import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import * as moment from 'moment';
import { Duration, Moment } from 'moment';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  age = (birthday: Date): number => {
    let now: Moment = moment(new Date());
    let end: Moment = moment(birthday);
    let duration: Duration = moment.duration(now.diff(end));
    return Math.trunc(duration.asYears());
  };

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save()
  }

  async findAll(): Promise<GetUserDto[]> {
    let user: User[] = await Promise.resolve(this.userModel.find().exec());
    let usersWithAge: GetUserDto[] = user.map((user) => {
      return {
        firstname: user.firstname,
        lastname: user.lastname,
        age: this.age(user.birthday),
        mail: user.mail,
      };
    });
    return usersWithAge;
  }

  async findById(id: string): Promise<GetUserDto> {
    let user: User = await Promise.resolve(this.userModel.findById(id).exec());
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      age: this.age(user.birthday),
      mail: user.mail,
    };
  }

  async deleteById(id: string): Promise<User> {
    return await Promise.resolve(this.userModel.findByIdAndDelete(id).exec());
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    const updateUser = new this.userModel(updateUserDto);
    return updateUser.updateOne(
      {
        _id: id,
      },
      updateUserDto,
    );
  }
}
