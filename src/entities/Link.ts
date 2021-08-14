import {
  Column, CreateDateColumn, Entity, UpdateDateColumn, ObjectIdColumn,
} from 'typeorm';

@Entity('links')
class Link {
    @ObjectIdColumn()
    readonly id: string;

    @Column()
    group: string;

    @Column()
    url: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Link;
