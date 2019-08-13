import React from 'react';
import { connect } from 'react-redux';
import Task from './Item';
import tasksFetchData from '../../store/task/actions';

class TaskList extends React.Component {
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
    }
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(tasksFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);