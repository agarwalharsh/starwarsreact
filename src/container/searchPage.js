import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../_store';
import { Link } from 'react-router';
import Search from '../component/search';
import { searchPlanetAction } from '../_actions';
import Results from '../component/results';
import Logo from '../component/logo';

import '../css/Search.css';

class searchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            isFetched: false
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(searchStr) {
        const { searchPlanetAction } = this.props;

        this.setState({
            searchString: searchStr,
            isFetched: false
        });

        searchPlanetAction(searchStr);
    }

    render() {
        const { state } = this.props;

        return (
            <div>
                <Logo />
                { (!isLoggedIn()) &&
                    ( <Link className="logout-link" to="/">Logout</Link>)
                }
                <div className="search-container">
                    <header className="search-header">
                    <Search onChange={this.handleChange} />
                    </header>
                    <section className="search-content">
                        { (state.planetSearch.isFetched && state.planetSearch.items && state.planetSearch.items.length > 0 ) &&
                            ( <Results items={state.planetSearch.items} /> ) 
                        }
                        { (state.planetSearch.isFetched && state.planetSearch.items && state.planetSearch.items.length === 0 ) &&
                            ( <h5>No Results</h5> )
                        }
                    </section>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      state
  }
}

export default connect(mapStateToProps, { searchPlanetAction })(searchPage);
