import React from "react";
import TopicActions from 'actions/TopicActions';
import TopicTextInput from 'components/TopicTextInput.react';
import process from '../utils/parser';

export default class EntryBox extends React.Component {
  /**
   * Event handler called within TopicTextInput.
   * Defining this here allows TopicTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave = (text) => {
    TopicActions.create(text);
    if (this.isValid(text)) {
      this._onChange("");
    }
  };

  _onChange = (text) => {
    TopicActions.typing(text);
  };

  isValid = (text) => {
    return !!process(text) || this.props.topic === "";
  };

  render() {
    //var result = process(this.props.topic);
    var errorMessage;
    var value = this.props.topic;
    if (!this.isValid(this.props.topic)) {
      errorMessage = <div className="entrybox__footer">Данные введены не корректно!</div>;
    }

    return (
      <div className="entrybox">
        <h1 className="entrybox__header">Введи строку заблокированной суммы из ITC</h1>
        <TopicTextInput className="entrybox__input" value={value} placeholder="Строка из ITC" onChange={this._onChange} onSave={this._onSave} />
        {errorMessage}
      </div>
    );
  }
}

EntryBox.propTypes = { topic: React.PropTypes.string };
