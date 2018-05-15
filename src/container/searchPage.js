import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoggedIn } from '../_store';
import { Link } from 'react-router';
//import { fetchItemsIfNeeded } from '../actions/items';
import Search from '../component/search';
import { searchPlanetAction } from '../_actions';
import Results from '../component/results';
//import Loader from '../components/Loader';
//import Logo from '../components/Logo';

import '../Search.css';

class searchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(searchStr) {

        this.setState({
            searchString: searchStr
        });
        
        const { searchPlanetAction } = this.props;
        //const { searchString } = this.state;
        //console.log(this.state.searchString);

        searchPlanetAction(searchStr);
    }

    render() {
        const { state } = this.props;

        return (
            <div>
            <div className="search-container">
                <header className="search-header">
                <Search onChange={this.handleChange} />
                </header>
                <section className="search-content">
                    {console.log(state.planetSearch.items)}
                    { (state.planetSearch.items && state.planetSearch.items.length > 0 ) ? 
                        ( <Results items={state.planetSearch.items} /> ) :
                        ( <h5>No Results</h5> )
                    }
                </section>
            </div>
            { (isLoggedIn()) ? 
                ( <Link className="logout-link" to="/">Logout</Link>)
                :
                (<span />)
            }
            </div>
        );
    }
}

// searchPage.propTypes = {
//   searchStr: PropTypes.string,
//   items: PropTypes.arrayOf(PropTypes.object),
// };

function mapStateToProps(state) {
  return {
      state
  }
}

export default connect(mapStateToProps, { searchPlanetAction })(searchPage);
