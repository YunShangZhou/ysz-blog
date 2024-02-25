import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "@/module/comment/comment.entity";

export class Reply {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column()
    user: string;

    @ManyToOne((type) => Comment, (comment) => comment.replies)
    comment: Comment;
}