import React from 'react';

export class CreateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('A book was submitted: ' + this.state.value);
        event.preventDefault();

        fetch('http://68.183.131.35:3000/api/v1/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.value
            })
        }).then(res => {
            return res.json()
        })
            .then(data => console.log(data))
            .catch(error => console.log('ERROR from create component'))
    }

    render() {
        return (
            < div >
                <h1>Form to create a book: </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><br /><br />
                    <input type="submit" value="Submit" />
                </form >
            </div >
        );
    }
}