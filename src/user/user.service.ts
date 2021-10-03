import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {

    return `User name: ${createUserDto.name},\n
            Phone number: ${createUserDto.phoneNumber},\n
            CEP: ${createUserDto.cep}\n
            Derived from CEP:\n
            State: ${createUserDto.state},\n
            City: ${createUserDto.city},\n
            Address: ${createUserDto.address}`;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `Update requested to #${id}:\n${updateUserDto.name ? `Name: ${updateUserDto.name}\n`: `` }${updateUserDto.cep ? `CEP: ${updateUserDto.cep}\n`: `` }${updateUserDto.phoneNumber ? `Phone: ${updateUserDto.phoneNumber}\n`: `` }${updateUserDto.cpf ? `CPF: ${updateUserDto.cpf}\n`: `` }`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
