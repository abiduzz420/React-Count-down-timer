import React from 'react';
import './App.css';
import Clock from './Clock';
import {Form,FormControl,Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
       deadline : '31 December,2017',
       newDeadline : ''
    };
  }
  updateDeadline(){
    this.setState({
      deadline : this.state.newDeadline
    });
  }

  textEntered(e){
    this.setState({
      newDeadline: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div  className="Title">Count Down to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="Enter date..."
            onChange={(event) =>
              this.setState({
              newDeadline :event.target.value})}/>
          <Button onClick={() => this.updateDeadline()}>Submit new deadline</Button>
        </Form>
      </div>
    );
  }

}

export default App;
