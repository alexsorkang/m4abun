import React, { Component } from 'react';
import logo from './kiru.png';
import './App.css';
import moment from 'moment';
import humanizeDuration from 'humanize-duration';

class App extends Component {
  constructor(props) {
    super(props);
    const a = moment('2016-11-06 07:39:00')
    const b = moment()
    const duration = moment.duration(b.diff(a))
    this.state = { date: humanizeDuration(duration, { round: true }) };
  }
  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }
  componentWillUnmount() {
      clearInterval(this.timerID);
  }
  tick() {
    const a = moment('2016-11-06 07:39:00')
    const b = moment()
    const duration = moment.duration(b.diff(a))
    this.setState({
        date: humanizeDuration(duration, { round: true })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.date} since kiru promised
          </p>
        </header>
      </div>
    );
  }
}

export default App;
