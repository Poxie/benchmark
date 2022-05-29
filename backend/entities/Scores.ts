import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Scores extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('text')
    userId!: string;

    @Column('text')
    gameId!: string;

    @Column('bigint')
    score!: number;
}