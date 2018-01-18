import React from 'react';
import {Field} from 'redux-form';

class GeneralDetailsForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Tab 1</h1>
        <div className="requestor-name">
          <label>Name of requester</label>
          <Field name="nameOfRequester" type="text" component="input" />
        </div>
        <hr/>
      </div>
    );
  }
}

export default GeneralDetailsForm;
