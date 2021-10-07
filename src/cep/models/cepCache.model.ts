import { AllowNull, Column, Index, Model, PrimaryKey, Table} from 'sequelize-typescript';

@Table
export class CepCache extends Model {
    
    @PrimaryKey
    @Index('cep-index')
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
    
}