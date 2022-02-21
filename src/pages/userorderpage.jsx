import React from 'react';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';
import UserContent from '../components/userContent';
import Divider from '../components/Divider';
import OrderTable from '../components/OrderTable';

const tableTitle = ['Order Tracking', 'Order id', 'Total Payment', 'Status'];
const UserOrderPage = (props) => {
  return (
    <NavLayout role={ROLE.USER}>
      <UserContent>
        {tableTitle.map(function (item, index) {
          return <div className={`userPage-id${index}`}>{item}</div>;
        })}
        <Divider />
        <OrderTable />
      </UserContent>
    </NavLayout>
  );
};

export default UserOrderPage;
