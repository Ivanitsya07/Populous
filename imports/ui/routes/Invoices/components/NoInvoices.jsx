import React from 'react';
import {Link} from "react-router-dom";
import {
  userRoles,
} from 'meteor/populous:constants';
import {H2} from "../../../components/styled-components/Typography/headers";

export const NoInvoices = ({currentUser, className}) => {
  const isInvestor = currentUser.role === userRoles.investor

  return (<div className={className}>
    <H2 transform="uppercase" opacity={0.8}>
      My invoices
    </H2>
    {isInvestor
      ? <p>You haven’t purchased any invoices yet.</p>
      : <p>You haven’t added any invoices yet. </p>
    }
    <div className="propose-wrapper">
      <div>
        <img src={'/img/' + (isInvestor ? 'no-invoices-investor.png' : 'no-invoices-borrower.png')}/>
      </div>
      <Link to={(isInvestor ? '#' : '/add-invoice')}>
        {(isInvestor ? 'buy invoices on the market' : 'add invoice')}
      </Link>
    </div>
  </div>)
};
