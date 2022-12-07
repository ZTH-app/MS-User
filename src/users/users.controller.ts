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
import { GetUserDto } from './dto/get-user.dto';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    description: "L'utilisateur a été ajouté à la bdd",
    type: CreateUserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: "Permet d'obtenir tous les utilisateurs présents dans la bdd",
    type: [GetUserDto],
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description:
      "Permet d'obtenir un utilisateur présent dans la bdd via son id",
    type: GetUserDto,
  })
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Supprime un utilisateur de la bdd via son id',
    type: GetUserDto,
  })
  deleteById(@Param('id') id: string) {
    return this.usersService.deleteById(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Modifie un utilisateur via son id',
    type: String,
  })
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.update(id, user);
  }
}
