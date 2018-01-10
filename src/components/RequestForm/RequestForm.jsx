import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

export default class RequestForm extends React.Component {
  render() {
    const {handleSubmit, onSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="requestor-name">
            <label>Name of the requestor</label>
            <Field name="requester" type="text" component="input" />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

RequestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
