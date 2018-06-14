import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Link} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';
import {Alert, Button, Card, Col, Collapse, Row} from 'reactstrap';

import { H2, P } from '../../../components/styled-components/Typography/headers';
import MyInvoicesFilters from './MyInvoicesFilters';
import MyInvoicesMoreFilters from './MyInvoicesMoreFilters';
import InvoiceCard from './InvoiceCard';
import {FiltersToggle} from "../../../components/styled-components/Invoices/FiltersToggle";
import NoInvoices from "../../../components/styled-components/Invoices/NoInvoices";

import Spinner from '/imports/ui/components/Spinner';

const InvoicesList = ({
                        loading, invoices, filters, showFilters, invoicesAvailable,
                        currentUser, salePriceLimits,
                        updateFiltersVisibility, updateFiltersStatuses,
                        updateFiltersCurrency, updateFiltersSalePrice,
                        updateDueDates, updateFullTextSearch,
                        updateSortBy, updatePerPage, resetFilters
                      }) => {
  if (loading) {
    return <div><Spinner /></div>;
  }

  if(!invoicesAvailable){
    return (<Row><Col xs={'12'}><NoInvoices currentUser={currentUser}/></Col></Row>)
  }

  return (
    <div>
      <Row>
        <Col xs={'12'} md={'9'} className="m-t-30">
          <H2 transform="uppercase" opacity={0.8}>
            MY INVOICES
            <FiltersToggle onClick={updateFiltersVisibility} isActive={showFilters} className="fa fa-filter"/>
          </H2>
          <Collapse isOpen={showFilters} className="m-t-20">
            <MyInvoicesFilters
              statusChange={updateFiltersStatuses}
              currencyChange={updateFiltersCurrency}
              salePriceChange={updateFiltersSalePrice}
              dueDatesChange={updateDueDates}
              resetFilters={resetFilters}
              filters={filters}
              salePriceLimits={salePriceLimits}/>
          </Collapse>
        </Col>
      </Row>
      <Row className="m-t-30">
        <Col xs={'12'}>
          {invoices.length > 0 && <MyInvoicesMoreFilters filters={filters}
                                    updatePerPage={updatePerPage}
                                    updateSortBy={updateSortBy}
                                    updateFullTextSearch={updateFullTextSearch}/>}
        </Col>
      </Row>
      <Row>
        <Col xs={'12'}>
          {invoices.length > 0
            ? invoices.map((invoice, index) => <InvoiceCard invoice={invoice} key={invoice.invoiceNumber || index}/>)
            : <div className="text-center">
                <P>
                  There is no invoices that match your search preferences
                </P>
                <img src="./img/img-no-result-invoices.png" height={80} alt="No results" />
              </div>}
        </Col>
      </Row>
    </div>
  );
};

export default InvoicesList;
