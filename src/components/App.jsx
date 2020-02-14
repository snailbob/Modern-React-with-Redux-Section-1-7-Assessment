import React from 'react';
import FlagCard from './FlagCardComponent.jsx'
import SearchBar from './SearchBarComponent'
import Spinner from './SpinnerComponent'
import Users from '../faker';

class App extends React.Component {
    state = {
        users: Users(),
        isLoading: false,
        filteredUsers: [],
    };

    flagImgSrc = (country) => {
        return `https://www.countryflags.io/${country}/flat/64.png`;
    }
    onSearchSubmit = (searchText) => {
        console.log('users :', this.state.users);

        console.log('searchText :', searchText);

        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false});
            let filteredUsers = this.state.users.filter((user) => user.email === searchText);
            filteredUsers = filteredUsers ? filteredUsers.map(item => {
                item.flag = this.flagImgSrc(item.countryCode);
                return item;
            }) : [];
            this.setState({filteredUsers});
            console.log('this.filteredUsers :', this.state.filteredUsers);
          }, 500);
      
    }
    render() {
        return (
        <div style={{marginTop: '15px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            {this.state.isLoading && <Spinner></Spinner>}
            {!this.state.filteredUsers.length && !this.state.isLoading && <p style={{textAlign: 'center'}}>No Result!</p>}
            <div className="ui container">
            {
                !this.state.isLoading && this.state.filteredUsers.map(item => {
                    return <FlagCard key={item.email} user={item}></FlagCard>
                })
            }
            </div>
            
        </div>);
    }
};

export default App;