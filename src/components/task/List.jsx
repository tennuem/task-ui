import React from 'react';
import { connect } from 'react-redux';
import Task from './Item';

class TaskList extends React.Component {
    render() {
        const { tasks } = this.props;
        return (
            <div>
                <ul className="task-list" >
                    {tasks && tasks.length
                        ? tasks.map((task, index) => {
                            return <Task key={index} task={task} />;
                        })
                        : "No tasks!"}
                </ul >
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

export default connect(mapStateToProps)(TaskList);