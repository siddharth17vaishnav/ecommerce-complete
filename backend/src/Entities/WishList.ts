import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";


@Entity("wishlist")
export class WishList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    like: boolean = false;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product | number

    @ManyToOne(() => User, (user) => user.wishlist)
    user: User | number
}
