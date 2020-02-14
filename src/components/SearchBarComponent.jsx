import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui raised very padded container segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search by Email</label>
                        <div className="ui icon input">
                            <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} placeholder="Search..." />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;