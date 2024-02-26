import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from '@/module/comment/comment.entity'


@Entity()
export class Paper {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ length: 20 })
  title: string;

  @Column({ nullable: true, length: 30 })
  description?: string;

  @Column({ nullable: true })
  cover: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  content: string;

  @Column()
  tags: string;

  @OneToMany(() => Comment, comment => comment.paper)
  comment: Comment[];
}
