import React from 'react';
import Button from './Button';

export default class Task extends React.Component {
    render() {
        return (
            <li className="task-item">
                {this.props.task.title}
                <Button id={this.props.task.id} />
            </li>
        )
    }
}
