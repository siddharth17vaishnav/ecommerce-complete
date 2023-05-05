import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { OrderItems } from "./OrderItems";
import { User } from "./User";

@Entity('orders')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    total: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => OrderItems, (orderItems) => orderItems.order)
    orderItems: OrderItems[]

    @OneToMany(() => User, (user) => user.order)
    user: User[]

}