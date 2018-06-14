import {Meteor} from 'meteor/meteor';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withTracker} from 'meteor/react-meteor-data';
import {Invoice} from 'meteor/populous:api';


import InvoicesList from "../components/InvoicesList";
import InvoicesListActions, {setSalePriceLimits} from "../modules/actions";
import {invoicesSort} from "../modules/constants";
import store from "../../../../store/index";

const reduxData = connect(
  state => ({...state.app, ...state.InvoicesList}),
  {
    ...InvoicesListActions,
  }
);

// Subscribe to the meteor db and init the store


const meteorData = withTracker((state) => {
  const {currency, statuses, salePrice, dueDate, fullText, sortBy} = state.filters;
  // Get the invoice data for the user
  const handle = Meteor.subscribe('invoices.user', Meteor.userId());
  const sort = invoicesSort[sortBy];

  const query = {
    borrowerId: Meteor.userId(),
    salePrice: {
      $gte: salePrice.min,
      $lte: salePrice.max,
    },
  };

  if (statuses.length) {
    query.status = {$in: statuses};
  }

  if (currency !== 'all') {
    query.currency = currency;
  }

  if (dueDate.startDate || dueDate.endDate) {
    query.dueDate = {};

    if (dueDate.startDate) {
      query.dueDate.$gte = dueDate.startDate.toDate()
    }

    if (dueDate.endDate) {
      query.dueDate.$lte = dueDate.endDate.toDate()
    }
  }

  if (fullText) {
    const fullTextRegExp = new RegExp('.*' + fullText + '.*', 'i');

    query.invoiceNumber = fullTextRegExp
    query.debtorName = fullTextRegExp;
  }

  const invoices = Invoice.find(
    query,
    {
      sort: {
        [sort.column]: (sort.desc ? -1 : 1),
      }
    }
  )
    .fetch();

  const invoicesAvailable = Invoice.find({borrowerId: Meteor.userId(),}).count();


  if (handle.ready() && invoicesAvailable) {

    const maxPrice = Invoice.findOne({borrowerId: Meteor.userId()}, {sort: {salePrice: -1}}).salePrice,
      minPrice = Invoice.findOne({borrowerId: Meteor.userId()}, {sort: {salePrice: 1}}).salePrice;

    store.dispatch(setSalePriceLimits({min: minPrice, max: maxPrice,}))
  }

  return {
    loading: !handle.ready(),
    invoices,
    invoicesAvailable,
  };
});

// Let reduxData override any values set in meteorData
export default compose(reduxData, meteorData)(InvoicesList);
