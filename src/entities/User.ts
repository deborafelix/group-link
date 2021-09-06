import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import bcrypt from "bcryptjs";

@Entity('users')
export default class User {
    @ObjectIdColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    verifyPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
      }
      async generatePassword(password?: string): Promise<void> {
        this.password = await bcrypt.hash(password ?? this.password, 8);
      }
}

