import React from 'react';
import { Alert, Container, Row, Col } from 'reactstrap';

import Button from '../../../components/styled-components/Button';

// NOTE TO FE DEV:
// This view isn't reactive yet due to the way our app.currentUser
// store is setup. One of the BE devs will soon implement the
// meteor-redux-middlewares package and it will auto-update when the
// PPTAddress is saved to the user.

const Wallet = ({ currentUser, creatingAddress, createAddress }) => (
  <Container>
    <Row>
      <Col xs="12">
        <h2>Wallet</h2>

        <h5>PPT Address</h5>
        { currentUser.PPTAddress ?
          <Alert color="primary">
            Your PPT address: { currentUser.PPTAddress }
          </Alert> :
          <div>
            <p>
              You currently don't have a Populous PPT address.
            </p>
            <Button
              primary
              onClick={createAddress}
              disabled={creatingAddress}
            >
              { creatingAddress ?
                "We're creating an address for you now. Please check back soon..." :
                'Create new PPT address'
              }
            </Button>
          </div>
        }
      </Col>
    </Row>
  </Container>
);

export default Wallet;
