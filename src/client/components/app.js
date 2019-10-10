import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import {CommonAction, Decrementer, Incrementer, TestAction} from '../redux/actions'

export class App extends Component {
  constructor(props) {
    super(props);
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }

  static fetching({dispatch}) {
    return [dispatch(TestAction())];
  }

  componentWillMount() {
    this.props.CommonAction();
  }

  incrementer() {
    this.props.Incrementer();
  }

  decrementer() {
    this.props.Decrementer();
  }

  render() {
    const {route, state : {userData}} = this.props;
    return (
      <React.Fragment>
        <div>
          App Loads Here
        </div>
        <div className={"inc-dec"}>
          <button onClick={this.decrementer}>-</button>
          <i className={"number"}>{this.props.state.number}</i>
          <button onClick={this.incrementer}>+</button>
        </div>
        <img className={"kakar"} src="ganpat.jpg" alt="Ganpat Kakar"/>
        <div>{renderRoutes(route.routes)}</div>
        {userData && <div>{userData.title}</div>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = {
    CommonAction,
    TestAction,
    Incrementer,
    Decrementer
};

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(App)
};
