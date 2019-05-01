import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CommonAction, Incrementer, Decrementer} from '../redux/actions'

export class App extends Component {
    constructor(props) {
        super(props);
        this.incrementer = this.incrementer.bind(this);
        this.decrementer = this.decrementer.bind(this);
    }

    componentWillMount() {
        this.props.CommonAction(true);
    }

    incrementer () {
        this.props.Incrementer(1);
    }

    decrementer () {
        this.props.Decrementer(1);
    }

  render() {
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
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        CommonAction : (data) => dispatch(CommonAction(data)),
        Incrementer: (data) => dispatch(Incrementer(data)),
        Decrementer: (data)=> dispatch(Decrementer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)