import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    name: string;
    @Column
    cpf: string;
    @Column
    phoneNumber: string;
    @Column
    cep: string;
    @Column
    state: string;
    @Column
    city: string;
    @Column
    district: string;
    @Column
    address: string;
    
}