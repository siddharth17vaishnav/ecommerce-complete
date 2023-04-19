import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { SubCategory } from "./SubCategory";

@Entity('category')
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    name: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
    subcategory: SubCategory[]
}