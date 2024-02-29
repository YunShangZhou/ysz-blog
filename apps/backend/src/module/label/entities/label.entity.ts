import { Paper } from "@/module/paper";
import { Column, ManyToMany, PrimaryGeneratedColumn , JoinTable, Entity } from "typeorm";

@Entity()
export class Label {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 label: string; 

 @ManyToMany(()=> Paper, paper=>paper.labels , {
  cascade:true
 })
 @JoinTable()
 paper: Paper[];
}
