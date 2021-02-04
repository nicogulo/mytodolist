import './App.css';
import './index.css';
import { Component } from 'react';
import List from './List';
import { Button, Form} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoItem : '',
      items: []
    }
  }


  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }  

  handleChange = (event) =>{
    this.setState({
      todoItem: event.target.value
    })
  }
    render() {
      return (
        <div id= "app">
        <div class= "item">
          <h1>TODO LIST</h1>
          <Form onSubmit = {this.handleSubmit} >
              <Form.Group>
                <Form.Control class="input" value={this.state.todoItem} onChange={this.handleChange} />
              </Form.Group>
              <div class="text-center">
                <Button text-center type="submit">
                  Submit
                </Button>
              </div>
          </Form>
        <List items={this.state.items}/>
      </div>
      </div>
    );
  }
}
export default App;
