import { Column, Model, Table, PrimaryKey, AllowNull, Is } from 'sequelize-typescript';

const cpfRegex = /\d{11}/

@Table
export class User extends Model {
    
    @AllowNull(false)
    @Column
    name: string;
    
    @PrimaryKey
    @Is('validCpf', (value) => {
        if(!cpfRegex.test(value)){
            throw new Error(`${value} não tem o formato de um cpf válido!`)
        }
    })
    @Column
    cpf: string;
    
    @AllowNull(false)
    @Column
    phoneNumber: string;
    
    @AllowNull(false)
    @Column
    cep: string;
    
    @AllowNull(false)
    @Column
    state: string;
    
    @AllowNull(false)
    @Column
    city: string;
    
    @AllowNull(false)
    @Column
    district: string;
    
    @AllowNull(false)
    @Column
    address: string;
    
    @AllowNull(false)
    @Column
    number: string;
    @Column
    complement: string;
    
}