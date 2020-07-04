import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Defines a entity for your database
 */

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    points: number;

    @Column()
    time: number;

    @Column()
    hard: number;

    @Column()
    medium: number;

    @Column()
    easy: number
};

export default User;
