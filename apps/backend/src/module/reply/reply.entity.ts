import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "@/module/comment/comment.entity";

@Entity()
export class Reply {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    text: string;

    @Column()
    user: string;

    @ManyToOne((type) => Comment, (comment) => comment.reply)
    comment: Comment;
}
