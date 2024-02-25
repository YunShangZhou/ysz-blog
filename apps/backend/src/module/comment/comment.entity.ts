import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reply } from "@/module/reply/reply.entity";


export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column()
    user: string;


    @OneToMany((type)=>Reply , (reply)=>reply.comment)
    replies: Reply[];
}