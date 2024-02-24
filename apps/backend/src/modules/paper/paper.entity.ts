import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
