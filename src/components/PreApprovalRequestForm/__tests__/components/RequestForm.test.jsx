import * as React from 'react';
import {shallow} from 'enzyme';
import {FormSection} from 'redux-form';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import RequestForm from '../../components/RequestForm';
import GeneralDetailsForm from '../../components/GeneralDetailsForm';
import DetailsForm from '../../components/DetailsForm';
import BusinessContactsForm from '../../components/BusinessContactsForm';

describe('RequestForm component', () => {
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();

  const getComponent = () => shallow(<RequestForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />);

  it('should have React-Tabs Component', () => {
    const requestForm = getComponent();

    const tabs = requestForm.find(Tabs);

    expect(tabs).toHaveLength(1);
  });

  it('should have Three Tabs', () => {
    const requestForm = getComponent();

    const tabListElement = requestForm.find(TabList);
    const tabs = tabListElement.find(Tab);

    expect(tabListElement).toHaveLength(1);
    expect(tabs).toHaveLength(3);
    expect(tabs.at(0).props().children).toBe('General details');
    expect(tabs.at(1).props().children).toBe('Details');
    expect(tabs.at(2).props().children).toBe('Business contacts');
  });


  it('should have Equal Tabs and TabPanels', () => {
    const requestForm = getComponent();

    const tabs = requestForm.find(Tab);
    const tabPanels = requestForm.find(TabPanel);

    expect(tabs.length === tabPanels.length).toEqual(true);
  });

  it('should have Three TabPanels component', () => {
    const requestForm = getComponent();

    const tabPanels = requestForm.find(TabPanel);
    const formSections = requestForm.find(FormSection);

    expect(tabPanels).toHaveLength(3);
    expect(formSections).toHaveLength(3);
    expect(formSections.at(0).props().children).toEqual(<GeneralDetailsForm />);
    expect(formSections.at(1).props().children).toEqual(<DetailsForm />);
    expect(formSections.at(2).props().children).toEqual(<BusinessContactsForm />);
  });

  it('should have submit button', () => {
    const requestForm = getComponent();

    const submitButton = requestForm.find('button');
    expect(submitButton).toHaveLength(1);
    expect(submitButton.props().type).toBe('submit');
    expect(submitButton.text()).toBe('Submit');
  });

  it('should call handleSubmit with onSubmit function on click of submit button', () => {
    const requestForm = getComponent();

    const submitButton = requestForm.find('button');
    submitButton.simulate('click');

    expect(handleSubmit).toHaveBeenCalledWith(onSubmit);
  });
});
