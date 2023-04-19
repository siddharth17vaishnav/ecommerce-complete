import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from "typeorm";
import { SubCategory } from "./SubCategory";
import { Product } from "./Product";

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

    @OneToMany(() => Product, (product) => product.category)
    product: Product
}