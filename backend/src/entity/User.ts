import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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
