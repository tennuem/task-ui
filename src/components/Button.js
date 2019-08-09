import React from 'react';

export default class Button extends React.Component {
    handleClick = () => {
        fetch('http://46.101.114.69:8080/task/' + this.props.id, {method: 'DELETE'});
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Delete
            </button>
        )
    }
}