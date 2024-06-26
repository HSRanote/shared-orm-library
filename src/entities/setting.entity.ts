import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isNotificationEnabled: boolean;

  @Column()
  isNewDashboardEnabled: boolean;

  @Column()
  timezone: string;
}
