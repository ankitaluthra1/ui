import React from 'react';
import PropTypes from 'prop-types';
import PreApprovalRequestGeneralDetailsForm from './PreApprovalRequestGeneralDetailsForm';
import PreApprovalRequestDetailsForm from './PreApprovalRequestDetailsForm';
import PreApprovalRequestBusinessContactsForm from './PreApprovalRequestBusinessContactsForm';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import '../../styles/react-tabs.scss';

export default class PreApprovalRequestForm extends React.Component {
  render() {
    const {handleSubmit, onSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs>
            <TabList>
              <Tab>General details</Tab>
              <Tab>Details</Tab>
              <Tab>Business contacts</Tab>
            </TabList>

            <TabPanel>
              <PreApprovalRequestGeneralDetailsForm/>
            </TabPanel>
            <TabPanel>
              <PreApprovalRequestDetailsForm/>
            </TabPanel>
            <TabPanel>
              <PreApprovalRequestBusinessContactsForm/>
            </TabPanel>
          </Tabs>
          <button type="submit">Submit</button>
        </form>
      </div>

    );
  }
}

PreApprovalRequestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
