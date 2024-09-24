export interface Alarm {
  id: string; // ID returned by Notifications.scheduleNotifcationAsync is a String
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