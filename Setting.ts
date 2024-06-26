export class Setting {
  id: number;
  userId: number; // Foreign key relationship with User
  isNotificationEnabled: boolean;
  isNewDashboardEnabled: boolean;
  timezone: string;
}