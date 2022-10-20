import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logs')
export default class Log {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column()
  desc!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ default: 'ADMIN' })
  createdBy!: string;
}
