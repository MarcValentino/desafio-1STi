import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model'

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {

    return await this.userModel.create(
      createUserDto
    );
  }

  async findAll() {
    return await this.userModel.findAll();
  }

  async findOne(cpf: string) {
    return await this.userModel.findAll({
      where: {
        cpf: cpf
      }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.update(updateUserDto, {
      where: {
        cpf:id
      }
    });
    // return `Update requested to #${id}:\n${updateUserDto.name ? `Name: ${updateUserDto.name}\n`: `` }${updateUserDto.cep ? `CEP: ${updateUserDto.cep}\n`: `` }${updateUserDto.phoneNumber ? `Phone: ${updateUserDto.phoneNumber}\n`: `` }${updateUserDto.cpf ? `CPF: ${updateUserDto.cpf}\n`: `` }`;
  }

  async remove(id: string) {
    return await this.userModel.destroy({
      where: {
        cpf : id
      }
    });
  }
}
