import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column('text')
    username!: string;

    @Column('text')
    name!: string;

    @Column('text')
    password!: string;
}