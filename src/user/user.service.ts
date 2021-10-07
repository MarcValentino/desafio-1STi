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
    return await new Promise(async (resolve) => {
      await this.userModel.create(
        createUserDto
      ).then(row => 
        resolve(row)
        ).catch(err => {
        resolve({erro : err})
      });
    })
  }

  async findAll() {
    return await new Promise(async (resolve) => {
      await this.userModel.findAll().then(users => 
        resolve(users)
        ).catch(err => resolve({erro : err}));
    }) 
    
  }

  async findOne(cpf: string) {
    return await new Promise(async (resolve) => {
      await this.userModel.findAll({
        where: {
          cpf: cpf
        }
      }).then(result => 
        resolve(result)
        ).catch(err => resolve({erro : err}));
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await new Promise(async (resolve) => {
      await this.userModel.update(updateUserDto, {
        where: {
          cpf:id
        }
      }).then(result => 
        resolve({mensagem: "Update feito com sucesso"})
        ).catch(err => resolve({erro : err}));
    })
  }

  async remove(id: string) {
    return await new Promise(async (resolve) => {
      await this.userModel.destroy({
        where: {
          cpf : id
        }
      }).then(result => 
        resolve({ mensagem: "Remoção feita com sucesso"})
        ).catch(err => 
          resolve({erro : err})
        )
    });
  }
}
