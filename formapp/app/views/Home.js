import React from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableHighlight, Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            bookname: ''
        };
    };

    cancelBook = () => {
        Alert.alert('Adding the book has been cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    addBook = () => {
        if (!this.state.bookname) {
            Alert.alert('Please enter a Bookname');
        }
        else {

            fetch('http://68.183.131.35:3000/api/v1/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.bookname
                })
            }).then(res => {
                return res.json()
            })
                .then(data => console.log(data))
                .catch(error => console.log('ERROR from Home component'));
            Alert.alert(`${this.state.bookname}  created`);
            this.props.navigation.navigate('HomeRT');

        }
    };
    listBook = () => {
        Alert.alert("This feature has not yet been implemented");
        this.props.navigation.navigate('HomeRT');

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Adding a Book</Text>
                <TextInput style={styles.inputs} onChangeText={(text) => this.setState({ bookname: text })} value={this.state.bookname} />
                <Text style={styles.label}>Enter Bookname</Text>

                <TouchableHighlight onPress={this.addBook} underlayColor='#31e981'>
                    <Text style={styles.buttons}> Add</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelBook} underlayColor='#31e981'>
                    <Text style={styles.buttons}> Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.listBook} underlayColor='#31e981'>
                    <Text style={styles.buttons}> List the books</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    labels: {
        paddingBottom: 10
    }
});
