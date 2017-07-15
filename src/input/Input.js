import React ,{Component} from 'react';
import TaskList from '../TaskList/TaskList';

import './input.css';

import Button from '../../node_modules/react-bootstrap/lib/Button';
import Form from '../../node_modules/react-bootstrap/lib/Form';
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl';
import FormGroup from '../../node_modules/react-bootstrap/lib/FormGroup';

class InputForm extends Component {

constructor(props){
    super(props);
    this.state = { list: [] };

   this.submit = this.submit.bind(this);
   this.remove = this.remove.bind(this);
}

submit(){
    const name = document.getElementById('input').value;
    const details = document.getElementById('textarea').value;

   if(name === '' || details === ''){
   }
   else{
        this.setState({list: this.state.list.concat({name,details})});
        document.getElementById('input').value = '';
        document.getElementById('textarea').value = '';
   }   
}

remove(id){
  var newArray = this.state.list.slice();
  newArray.splice(id,1);
  this.setState({list: newArray});
}

  render() {
    return (
      <div>
          <Form horizontal id="formContainer">
              <FormGroup id= "formgroup">
                      <FormControl type="input" placeholder="Task Name" id='input'/>
              </FormGroup>
              <FormGroup id= "formgroup">
                      <FormControl componentClass="textarea" placeholder="Task Detals" id='textarea'/>
              </FormGroup>
              <FormGroup id= "formgroup">
                      <Button bsStyle="success" onClick={this.submit} type="button">Submit</Button>
              </FormGroup>
          </Form>
        <div>
            <TaskList task={this.state.list} remove={this.remove}></TaskList>
        </div>
      </div>
    );
  }
}

export default InputForm;