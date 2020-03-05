//Code to display Username
import React from 'react';

export class UserName extends React.Component {
    state = {
        loading: true,
        books: []
    }

    componentDidMount() {

        fetch('http://68.183.131.35:3000/api/v1/books')
            .then(res => res.json())
            .then((data) => {
                this.setState({ books: data })
                console.log(this.state.books)

            })
            .catch(console.log)
    }
    render() {

        const { books } = this.state;
        return (
            <div>
                <h1>UserName : {books.name}</h1>

            </div>
        );

    }
}
