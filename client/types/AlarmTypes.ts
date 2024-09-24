export interface AlarmNotification {
  id: string; // ID returned by Notifications.scheduleNotifcationAsync is a string
  isActive?: boolean;
}

export interface AlarmDays {
  Sun: boolean;
  Mon: boolean;
  Tue: boolean;
  Wed: boolean;
  Thu: boolean;
  Fri: boolean;
  Sat: boolean;
}