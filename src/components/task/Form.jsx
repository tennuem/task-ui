import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/task/actions";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const { title, description } = this.state
        this.props.addTask(title, description);
        this.setState({
            title: '',
            description: ''
        });
    }

    render() {
        return (
            <div>
                <label>
                    Title:
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange} />
                </label>
                <button onClick={this.handleSubmit}>Create</button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTask }
)(AddTask);