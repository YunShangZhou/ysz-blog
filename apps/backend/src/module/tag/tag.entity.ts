import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from 'typeorm';
import { Reply } from '@/module/reply/reply.entity';
import { Paper } from '@/module/paper/paper.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  // @ManyToOne((type) => Paper, (paper) => paper.tag)
  // paper: Paper;
}
