import { http } from './index';

export const newOrderHttp = (order) => {
  return http('./order/new', {method: 'POST', });
};

export const myOrdersHttp = () => {
  return http('./orders/me', {method: 'GET', });
};

export const getAllOrdersHttp = () => {
  return http('./admin/orders', {method: 'GET', });
};