import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.usersService.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id) {
    return this.usersService.deleteById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.update(id, user);
  }
}
