import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  mobile!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  email!: string;

  @Column()
  gender!: string;

  //later added
  @Column({ nullable: true })
  age!: number;

  @Column()
  createdBy!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createDate!: Date;

  @Column({ nullable: true })
  updatedBy!: string;

  @UpdateDateColumn({ nullable: true, type: 'timestamptz' })
  updateDate!: Date;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
