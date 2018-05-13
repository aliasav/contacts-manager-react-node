import React, { Component } from 'react';
import axios from 'axios';

export default class Contacts extends Component {
    
    state = {
        contacts: []
    }
    
    // runs after component has loaded for the first time
    componentDidMount() {
        
        let contactsFetched = [];
        
        // Make a request for a user with a given ID
        axios.get('http://localhost:4000/contacts/list')
        .then((response) => {
            console.log(response)
            contactsFetched = response.data            
            this.setState({
                contacts: contactsFetched
            })
        })
        .catch(function (error) {
            console.error('error in axios get', error);
        })
    
    }

    render() {
        return <div>
            {this.state.contacts.map(contact => {
                return <div key={contact._id}>
                    {contact.name} - {contact.phone}
                </div>
            })}
        </div>
    }
}

export class SearchBar extends Component {  
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            searchContacts: []
        };
    }

    handleChange = (event) => {
        
        let searchText = event.target.value

        this.setState({
            inputValue: searchText
        })

        if (searchText && searchText.length > 0){

            let searchContacts = []
            let url = 'http://localhost:4000/contacts/search/' + searchText
            axios.get(url)
            .then((response) => {
                searchContacts = response.data            
                this.setState({
                    searchContacts: searchContacts
                })
            })
            .catch(function (error) {
                console.error('error in axios get', error);
            })
        
        }

    }
    
    render () {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <p>Search Results</p>
                <br/>
                <div>            
                    {this.state.searchContacts.map(contact => {
                        return <div key={contact._id}>
                            {contact.name} - {contact.phone}
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
  
