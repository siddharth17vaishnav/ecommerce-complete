import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity('productImages')
export class ProductImages extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Product, (product) => product.productImages)
    product: Product[]
}