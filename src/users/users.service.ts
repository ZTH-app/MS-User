import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import * as moment from 'moment';
import { Duration, Moment } from 'moment';
import { UserRepository } from './repo/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  age = (birthday: Date): number => {
    let now: Moment = moment(new Date());
    let end: Moment = moment(birthday);
    let duration: Duration = moment.duration(now.diff(end));
    return Math.trunc(duration.asYears());
  };

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<GetUserDto[]> {
    let user: User[] = await this.userRepository.findAll();
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
    let user: User = await this.userRepository.findById(id);
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      age: this.age(user.birthday),
      mail: user.mail,
    };
  }

  async deleteById(id: string): Promise<void> {
    return await this.userRepository.deleteById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<string> {
    await this.userRepository.update(id, updateUserDto);
    return 'Utilisateur modifié';
  }

  async test() : Promise<string>{
    let test = await this.userRepository.test();
    return test
  }
}
