import ApiClient from '../ApiClient';
import moment from 'moment';

export const getList = (apartmentId: number): Promise<any> =>
  ApiClient.get(`/payments/${apartmentId}`);

export const getPaymentsChartData = (
  payments: any[],
  installmentPlan: any,
): any[] => {
  const durationLeft = installmentPlan.duration - payments.length;
  const metersLeft =
    installmentPlan.meters -
    payments.reduce((acc, item) => {
      acc += item.metersAmount;
      return acc;
    }, 0);
  const monthlyMeters = metersLeft / durationLeft;

  return [{metersAmount: 0}, ...payments]
    .map(item => installmentPlan.meters - item.metersAmount)
    .concat(
      [...Array(durationLeft)].map(
        (_, index) => metersLeft - (index + 1) * monthlyMeters,
      ),
    );
};

export const getMonthlyMeters = (payments: any[], installmentPlan: any) => {
  // TODO: this code is duplicated
  const durationLeft = installmentPlan.duration - payments.length;
  const metersLeft =
    installmentPlan.meters -
    payments.reduce((acc, item) => {
      acc += item.metersAmount;
      return acc;
    }, 0);
  return metersLeft / durationLeft;
};

export const getPaymentChartLabels = (installmentPlan: any): any[] => {
  const startDate = moment(new Date(installmentPlan.startDate));
  return [...Array(installmentPlan.duration)].map((_, index) =>
    startDate.clone().add(index, 'M').format('MMM YY'),
  );
};
