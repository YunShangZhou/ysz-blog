import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Paper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 20 })
  title: string;

  @Column({ length: 30 })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  content: string;

  @Column()
  tags: string;

  @Column({nullable: true})
  cover: string;
}
