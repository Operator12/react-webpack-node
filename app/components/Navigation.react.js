import React from 'react';
import { Link } from 'react-router';
import Immutable from 'immutable';

import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';

export default class Navigation extends React.Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  };

  _onLogout = () => {
    UserActions.logout();
  };

  render() {
    return (
      <nav className="navigation" role="navigation">
          <Link to="/" className="navigation__item navigation__item--logo" activeClassName="navigation__item--active">Обработка данных с ITC</Link>
          <Link to="about" className="navigation__item" activeClassName="navigation__item--active">Описание</Link>
      </nav>
    );
  }

}

Navigation.propTypes = { user: React.PropTypes.instanceOf(Immutable.Map) };
