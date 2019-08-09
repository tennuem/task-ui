import React from 'react';
import Button from './Button';

export default class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.title}
                <Button id={this.props.id}/>
            </li>
        )
    }
}