import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Category } from "./Category";

@Entity('subcategory')
export class SubCategory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    name: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Category, (category) => category.subcategory)
    category: Category
}