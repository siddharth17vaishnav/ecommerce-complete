import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity('ordersItems')
export class OrderItems extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    quantity: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    // @JoinTable()
    // order: Order

    @ManyToOne(() => Product, (product) => product.orderItems)
    product: Product

    @ManyToOne(() => Order, (order) => order.orderItems)
    order: Order[]
}