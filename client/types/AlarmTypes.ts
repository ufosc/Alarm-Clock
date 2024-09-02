export interface Alarm {
  id: number;
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