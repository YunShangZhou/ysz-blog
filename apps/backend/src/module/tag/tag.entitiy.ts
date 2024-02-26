import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paper } from "../paper";



@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;

    @ManyToOne(() => Paper, paper => paper.tag)
    paper: Paper;
}