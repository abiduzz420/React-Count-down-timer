import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor(time/1000  % 60);
    const minutes = Math.floor(time/(1000*60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days,hours,minutes,seconds});
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline),1000);
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours} Hours</div>
        <div className="Clock-minutes">{this.state.minutes} Minutes</div>
        <div className="Clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    );
  }
}

export default Clock;
