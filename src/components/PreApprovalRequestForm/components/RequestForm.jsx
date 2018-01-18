import React from 'react';
import {FormSection} from 'redux-form';
import PropTypes from 'prop-types';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import GeneralDetailsForm from './GeneralDetailsForm';
import DetailsForm from './DetailsForm';
import BusinessContactsForm from './BusinessContactsForm';
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
              <FormSection name="data">
                <GeneralDetailsForm />
              </FormSection>
            </TabPanel>
            <TabPanel>
              <FormSection name="data">
                <DetailsForm />
              </FormSection>
            </TabPanel>
            <TabPanel>
              <FormSection name="data">
                <BusinessContactsForm />
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
