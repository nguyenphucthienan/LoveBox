export class DateTimeUtils {

  private static ONE_DAY = 24 * 60 * 60 * 1000;

  static daysBetween(firstDate: Date, secondDate: Date): number {
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / DateTimeUtils.ONE_DAY));
  }

}
