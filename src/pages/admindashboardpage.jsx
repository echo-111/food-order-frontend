import React from 'react';
import moment from 'moment';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';
import '../style/pages/adminDashboardPage.scss';

const AdminDashBoardPage = (props) => {
  const orders = [
    { index: 0, firstName: 'Bat', lastName: 'man', orderId: '123456', payment: '123', complete: 0 },
    { index: 1, firstName: 'Bat', lastName: 'man', orderId: '123456', payment: '123', complete: 0 },
    { index: 2, firstName: 'Bat', lastName: 'man', orderId: '123456', payment: '123', complete: 0 },
    { index: 3, firstName: 'Bat', lastName: 'man', orderId: '123456', payment: '123', complete: 0 },
    { index: 4, firstName: 'Bat', lastName: 'man', orderId: '123456', payment: '123', complete: 0 },
    { index: 5, firstName: 'Bat', lastName: 'man', orderId: '123456', payment: '123', complete: 0 },
  ];

  const today = moment(Date()).format('dddd, D MMMM, YYYY');

  return (
    <NavLayout role={ROLE.ADMIN}>
      <section className="dashboard-page">
        <header className="dashboard-page__title">
          <span>Dashboard</span>
          <span>{today}</span>
        </header>
        <div className="dashboard-page__content">
          <span className="dashboard-page__sub-header">Order Report</span>
          <table className="dashboard-page__orders-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Order</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((entry) => (
                <tr key={entry.index}>
                  <td className="dashboard-page__orders-table-td">
                    <span className="dashboard-page__orders-table-td-name">
                      {entry.firstName.charAt(0).toUpperCase() + entry.lastName.charAt(0).toUpperCase()}
                    </span>
                    <span className="dashboard-page__orders-table-td-fullname">
                      {entry.firstName + ' ' + entry.lastName}
                    </span>
                  </td>
                  <td>#{entry.orderId}</td>
                  <td>${entry.payment}</td>
                  <td>
                      <span 
                        className='dashboard-page__orders-table-button' 
                      >
                        Complete
                      </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </NavLayout>
  )
};

export default AdminDashBoardPage;
