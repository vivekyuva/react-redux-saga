import React , {Component} from "react"
import { connect } from "react-redux";
import {showTask} from "./actions/TaskActions"
class TaskList extends Component{
  state = {
    show: false,
    tasks: null
  }

  render(){
    return(
      <div className="col-md-6">
        <ul className="list-group">
          {
            this.props.tasks && this.props.tasks.map((task, index) => <li key={index+1} className="list-group-item" style={{cursor: "pointer"}} tooltip="dsd">{task.title}</li>)
          }
        </ul>
        {
          !this.props.tasks ? 
            <button className="btn btn-primary" onClick={this.props.showTask}>Show Task</button>
          : null
        }
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state && state.tasks
  };
};


export default connect(mapStateToProps,{
  showTask
}
)(TaskList);