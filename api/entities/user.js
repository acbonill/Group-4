import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Order from './order'

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id

  @column ({ type: 'varchar', unique: true })
  first

  @column ({ type: 'varchar', unique: true })
  last

  @Column({ type: 'varchar', unique: true })
  email

  @Column({ type: 'varchar', nullable: false })
  password

  @Column({ type: 'varchar', unique: true })
  creditcard
  
  @Column({ type: 'varchar', unique: true })
  address

  @Column({ type: "enum", enum: ["Admin", "Employee", "Customer"], default: "Customer"})
  role

  @OneToMany(() => Order, (order) => order.user,{eager:true})
  orders
}
