//Contains the User database class and the custom User return type.
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", nullable: true })
    name: string

    @Column({ type: "varchar", unique: true})
    email: string

    @Column()
    password: string

    @Column({ type: "varchar", unique: true, nullable: true})
    phone: string

    @Column({ type: "varchar", nullable: true})
    address: string

}