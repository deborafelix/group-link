import {
  Column, CreateDateColumn, Entity, UpdateDateColumn, ObjectIdColumn,
} from 'typeorm';

@Entity('links')
class Link {
    @ObjectIdColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    icon: string;

    @Column()
    url: string;

    @Column()
    description: string;

    @Column()
    group: string;

    @Column()
    fav: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Link;
