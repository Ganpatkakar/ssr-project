import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';

import Header from "./header/header";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;
    return (
      <React.Fragment>
        <Header/>
        <div>{renderRoutes(route.routes)}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(App)
