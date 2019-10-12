import "../styles/style.css";
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';

import Header from "./header/header";
import Footer from "./footer/footer";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;
    return (
      <Fragment>
        <div className="page-container">
          <div className="content-wrap">
            <Header/>
            <div className={"container"}>{renderRoutes(route.routes)}</div>
          </div>
          <Footer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(App)
