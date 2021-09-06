import {
  Column, CreateDateColumn, Entity, UpdateDateColumn, ObjectIdColumn,
} from 'typeorm';

@Entity('links')
export default  class Link {
    @ObjectIdColumn()
    readonly id: string;

    @Column()
    userId: string;

    @Column()
    title: string;

    @Column()
    icon: string;

    @Column()
    url: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
