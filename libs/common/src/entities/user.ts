import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_pkey', ['userId'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'userId' })
  userId: number;

  @Column('character varying', {
    name: 'name',
    nullable: true,
    length: 100,
  })
  name: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 100 })
  email: string | null;

  @Column('integer', { name: 'age', nullable: true })
  age: number | null;

  @Column('timestamp without time zone', {
    name: 'updatedAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'createdAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;
}
