import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Games extends BaseEntity {
    @PrimaryColumn('varchar')
    id!: string;

    @Column('text')
    title!: string;

    @Column('text')
    description!: string;
}