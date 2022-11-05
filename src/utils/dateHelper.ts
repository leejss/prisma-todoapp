export class MyDate {
  static readonly weeks = ["일", "월", "화", "수", "목", "금", "토"];
  private m: string;
  private d: string;
  private w: string;
  private isToday: boolean;
  private isTommorrow: boolean;
  private isPast: boolean;
  constructor(date: Date) {
    const today = new Date();
    this.m = `${date.getMonth() + 1}`;
    this.d = `${date.getDate()}`;
    this.w = `${MyDate.weeks[date.getDay()]}`;
    this.isToday = today.getDate() === date.getDate();
    this.isTommorrow = today.getDate() < date.getDate();
    this.isPast = today.getDate() > date.getDate();
  }

  getDate() {
    return {
      month: this.m,
      day: this.d,
      week: this.w,
      isToday: this.isToday,
      isTommorrow: this.isTommorrow,
      isPast: this.isPast,
    };
  }
}

export function formatDate(date: Date): string {
  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}

export const formatTodoDate = (date: Date) => {
  const D = new MyDate(date).getDate();
  if (D.isToday) {
    return "오늘";
  }
  return `${D.month}월 ${D.day}일 (${D.week})`;
};
