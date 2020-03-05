//This code displays specific book details
import React from 'react';

export class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }
    componentDidMount() {

        fetch('http://68.183.131.35:3000/api/v1/books/1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render() {

        const { isLoaded, items } = this.state;
        const a = items.data;
        console.log(items);
        if (!isLoaded) {
            return <div>loading..</div>;
        }
        else {
            return (
                <div>
                    <ul>
                        {console.log(items.data)}
                        {console.log(a)}
                        <h3>Book details(id=1)</h3>
                        <li>{a.id}</li>
                        <li>{a.name}</li>

                    </ul>
                </div >
            );

        }


    }
}
