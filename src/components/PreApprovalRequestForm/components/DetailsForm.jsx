import React from 'react';
import {Field} from 'redux-form';

class DetailsForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Tab 2</h1>
        <div className="requestor-name">
          <label>Purpose of entertainment</label>
          <Field name="purposeOfEntertainment" type="text" component="input" />
        </div>
        <hr />
      </div>
    );
  }
}

export default DetailsForm;

