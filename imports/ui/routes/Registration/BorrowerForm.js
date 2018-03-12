import React, { Component } from 'react';

import Button from '../../components/styled-components/Button';
import { H3 } from '../../components/styled-components/Typography/headers';
import BorrowerRegistrationPageOne from './components/BorrowerRegistrationPageOne';
import BorrowerRegistrationPageTwo from './components/BorrowerRegistrationPageTwo';

class BorrowerForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <div>
        { page === 1 && <BorrowerRegistrationPageOne onSubmit={this.nextPage} /> }
        { page === 2 &&
          <BorrowerRegistrationPageTwo
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        }
      </div>
    );
  }
}

export default BorrowerForm;
