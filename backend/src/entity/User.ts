import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

/**
 * Defines a entity for your database
 */

@Entity()
class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  points: number;

};

export default User;
