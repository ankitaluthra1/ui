import React from 'react';
import {FormSection} from 'redux-form';
import PropTypes from 'prop-types';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import PreApprovalRequestGeneralDetailsForm from './GeneralDetailsForm';
import PreApprovalRequestDetailsForm from './DetailsForm';
import PreApprovalRequestBusinessContactsForm from './BusinessContactsForm';
import '../../../styles/react-tabs.scss';

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
              <FormSection>
                <PreApprovalRequestGeneralDetailsForm />
              </FormSection>
            </TabPanel>
            <TabPanel>
              <FormSection>
                <PreApprovalRequestDetailsForm />
              </FormSection>
            </TabPanel>
            <TabPanel>
              <FormSection>
                <PreApprovalRequestBusinessContactsForm />
              </FormSection>
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
