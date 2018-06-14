import React from 'react';
import moment from 'moment';

import Button from '../../../components/styled-components/Button';

class Invoice extends React.Component {
  constructor(props) {
    super(props);

    // Reset the state so the correct Invoice object
    // is loaded into state and rendered
    props.reset();
  }

  render() {
    const {
      currentUser,
      getSignedContract,
      invoice,
      loading,
    } = this.props;

    if (loading) {
      return <div><Spinner /></div>;
    }

    const borrower = invoice.borrower();

    return (
      <div>
        <h2>Invoice { invoice._id }</h2>
        <ul>
          <li>Invoice number: { invoice.invoiceNumber }</li>
          <li>Amount: { invoice.amount }</li>
          <li>Created { moment(invoice.createdAt).fromNow() }</li>
          <li>Currency: { invoice.currency }</li>
          <li>Debtor name: { invoice.debtorName }</li>
          <li>Due { moment(invoice.dueDate).fromNow() }</li>
          <li>Sale price: { invoice.salePrice }</li>
          <li>Signed contract IPFS hash: { invoice.signedContractIPFSHash }</li>
        </ul>

        <h3>Borrower info</h3>
        <ul>
          <li>Name: { borrower.fullName() }</li>
          <li>Occupation: { borrower.occupation }</li>
          <li>Company: { borrower.companyName }</li>
          <li>ID: { borrower._id }</li>
        </ul>

        { invoice.borrowerId === currentUser._id &&
          <Button
            onClick={e => {
              e.preventDefault();
              getSignedContract();
            }}
            primary
          >
            Download signed contract
          </Button>
        }
      </div>
    );
  }
}

export default Invoice;
