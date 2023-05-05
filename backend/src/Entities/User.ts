import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Order } from "./Order";
import { WishList } from "./WishList";

export type UserRoleType = 'user' | 'admin'

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  mobile: string;

  @Column({ enum: ["user", "admin"] })
  type: UserRoleType

  @Column()
  profile: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Order, (order) => order.user)
  order: Order
  @OneToMany(() => WishList, (wishlist) => wishlist.user)
  wishlist: WishList[]
}
