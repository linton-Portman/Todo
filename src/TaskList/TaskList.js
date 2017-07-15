import React, {Component} from 'react';
import Table from '../../node_modules/react-bootstrap/lib/Table';
import Button from '../../node_modules/react-bootstrap/lib/Button';
import './Tasklist.css';

class TaskList extends Component {


    constructor(props){
        super(props);
        this.removeFunc = this.removeFunc.bind(this);
    }

removeFunc(event){
    this.props.remove(event.target.id);
}





  render() {

var tasklist = this.props.task.map((item,index) => {
                    return( 
                       <tr key={index} id={index}>
                            <td>{item.name}</td>
                            <td>{item.details}</td>
                            <td><Button id={index} bsStyle = "danger" onClick={this.removeFunc} >Remove</Button></td>
                       </tr>  
                    ) 
                });
   
    return (
        <div>
            <Table striped bordered
             hover>
                <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Task Details</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {tasklist}
                </tbody>
            </Table>
            
        </div>
    );
  }
}

export default TaskList;