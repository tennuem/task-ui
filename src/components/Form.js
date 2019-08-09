import React from 'react';
import ReactModal from 'react-modal';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            title: "",
            description: ""
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
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
        let task = {
            "task": {
                "title": this.state.title,
                "description": this.state.description
            }
        }

        fetch('http://0.0.0.0:8080/task', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Create</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example">
                    <button onClick={this.handleCloseModal}>Close</button>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title:
                            <input
                                name="title"
                                type="text"
                                checked={this.state.title}
                                onChange={this.handleChange} />
                        </label>
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="create" />
                    </form>
                </ReactModal>
            </div>
        );
    }
}