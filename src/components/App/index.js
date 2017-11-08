import React, {Component} from 'react';
import './App.css';
import List from '../List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
        items: [...this.state.items, {
          todo: this.state.term,
          complete: false
        }]
      })
    }

    onComplete = index =>{
      this.setState(prevState =>({
        items: [
          ...prevState.items.slice(0, index),{
            todo: prevState.items[index].todo,
            complete: !prevState.items[index].complete},
            ...prevState.items.slice(index+1)]
      }));
    }

    render(){
      return(
        <div><br/>
          <form onSubmit={this.onSubmit}>
            <TextField hintText="Add your todo, that you need to do, to do what you need to do." value = {this.state.term} onChange={this.onChange} fullWidth={true} />
            <RaisedButton type="submit" label="Submit" primary={true} fullWidth={true} />
          </form>

          <List items={this.state.items} onComplete={this.onComplete}/>
      </div>
    );
  }
}

export default App;
