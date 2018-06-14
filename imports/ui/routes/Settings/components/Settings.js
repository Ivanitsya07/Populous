import React from 'react';
import { Alert, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import PersonalDetailsForm from '../containers/PersonalDetailsFormContainer';
import BankDetailsForm from '../containers/BankDetailsFormContainer';
import PasswordForm from '../containers/PasswordFormContainer';
import { H1, H3 } from '../../../components/styled-components/Typography/headers';
import { Block } from '../../../components/styled-components/Divs';
import KYCStatus from '../helpers/kyc-status';

const Settings = ({ currentUser }) => {
  const kyc = KYCStatus(currentUser.KYCStatus);

  return <div>
			<Row>
				<Col xs="12" md="6">
					<H1>My account</H1>
					<Link to={'/reset-2-fa'}>Don't have access to your 2-factor authentication device?</Link>
				</Col>
				{kyc && <Col xs="12" md="6">
						<Alert color={kyc.color}>{kyc.message}</Alert>
					</Col>}
			</Row>
			<br />
			<Block>
				<Row>
					<Col xs="12" lg="4">
						<H3>Avatar</H3>
						{/* TODO: MODAL WITH UPLOAD AND CROP/SCALE */}
					</Col>
					<Col xs="12" lg="8">
						<PersonalDetailsForm />
					</Col>
				</Row>
			</Block>

			<Block>
				<Row>
					<Col>
						<BankDetailsForm />
					</Col>
					<Col>
						<PasswordForm />
					</Col>
				</Row>
			</Block>
		</div>;
};

export default Settings;
