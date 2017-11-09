import React, {Component} from 'react';
import './App.css';
import List from '../List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {purple300} from 'material-ui/styles/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: '',
      items: [],
    }
  }

  componentDidMount() {

  }

  getTodos = () => {
    fetch('/api/todos').then(result => {
      console.log(result);
      return result.json()
    }).then(value => {
      this.setState(prevState => ({
        items: value.payload.map(item => ({
          todo: item.item,
          complete: item.complete
        }))
      }))
    })
  }

  onChange=(event)=>{
    this.setState({
      term: event.target.value
    });
  }

    onSubmit = (event) => {
      fetch('/api/todos', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({item: this.state.term, complete: false})
      }).then(res => res.json()).then(value => {
        console.log(value)
        this.getTodos();
      }).catch(err => console.log(err));
      event.preventDefault();
      // this.setState({
      //   term: '',
      //   items: [
      //     ...this.state.items, {
      //       items: this.state.term,
      //       complete: false
      //     }
      //   ]
      // })
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
const style = {
  color: purple300,
}
      return(
        <div><br/>
          <form onSubmit={this.onSubmit}>
            <TextField hintText="Add your todo, that you need to do, to do what you need to do." value = {this.state.term} onChange={this.onChange} fullWidth={true} />
            <RaisedButton style={style} type="submit" label="Submit" primary={true} fullWidth={true} />
          </form>

          <List items={this.state.items} onComplete={this.onComplete}/>
      </div>
    );
  }
}

export default App;
