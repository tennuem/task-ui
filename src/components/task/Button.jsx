import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../store/task/actions';

class Button extends React.Component {
    handleClick = () => {
        const {id, deleteTask} = this.props;
        deleteTask(id);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Delete
            </button>
        )
    }
}

export default connect(
    null,
    { deleteTask }
)(Button);