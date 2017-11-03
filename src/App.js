import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: '',
      items: [],
    }
  }
    onChange=(event)=>{
      this.setState({
        term: event.target.value
      });
    }

    onSubmit =(event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      })
    }

    render(){
      return(
        <div>
          <form onSubmit={this.onSubmit}>
            <input placeholder="Add your todo" value = {this.state.term} onChange={this.onChange} />
            <button type="submit">Add To Do</button>
          </form>

          <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
