import React from 'react';
import { connect } from 'react-redux';
import Task from './Item';
import { fetchTasks } from "../../store/task/actions";

class TaskList extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        const { hasErrored, isLoading, tasks } = this.props;
        if (hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (isLoading) {
            return <p>Loading…</p>;
        }
        if (!tasks || !tasks.length) {
            return <p>No tasks</p>;
        }
        return (
            <div>
                <ul className="task-list" >
                    {tasks.map((task, index) => {
                        return <Task key={index} task={task} />;
                    })}
                </ul >
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hasErrored: state.tasks.hasErrored,
        isLoading: state.tasks.isLoading,
        tasks: state.tasks.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchTasks(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);