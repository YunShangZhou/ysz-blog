import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Comment } from '@/module/comment/comment.entity'
import { Tag } from '../tag/tag.entitiy';
import { Label } from '../label/entities/label.entity';

@Entity()
export class Paper {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ length: 20 })
  title: string;

  @Column({ nullable: true, length: 30 })
  description?: string;

  @Column({ nullable: true })
  cover?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  content: string;

  @OneToMany(() => Comment, comment => comment.paper)
  comment: Comment[];

  // @Column()
  // tag: string;
  @OneToMany(() => Tag, tag => tag.paper)
  tag: Tag[];

  @ManyToMany(()=> Label , label=>label.paper)
  labels: Label[];
}
