import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { METHODS } from 'http';



@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  password: string;
  
  @Column()
  points: number;

}

export default User;