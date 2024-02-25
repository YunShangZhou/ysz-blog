import { Column, PrimaryGeneratedColumn } from "typeorm";




export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column()
    user: string;

    
}