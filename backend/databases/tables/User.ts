import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", unique: true})
    name: string

    @Column({ type: "varchar", unique: true})
    email: string

    @Column()
    password: string

    @Column({ type: "varchar", unique: true})
    phone: string

    @Column({ type: "varchar"})
    address: string

}