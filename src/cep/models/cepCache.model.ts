import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CepCache extends Model {
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