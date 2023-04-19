import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm'
import { Category } from './Category'
import { ProductImages } from './ProductImage'

@Entity('products')
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Category, (category) => category.product)
    category: Category

    @OneToMany(() => ProductImages, (productImages) => productImages.product)
    productImages: ProductImages[]
}