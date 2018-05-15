import * as types from '../_constants'
import { searchPlanet } from '../_services';
import { push } from 'react-router-redux';

var fetchUrl = 'https://swapi.co/api/planets/?search=';

export function searchPlanetAction (searchString) {

    return dispatch => {
        searchPlanet(fetchUrl + searchString)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (response.results.length) {
                dispatch(planetFound({
                    "message": "Planets found",
                    "items": response.results,
                    "searchStr": searchString,
                    "isFetched": true
                }));
            } else {
                dispatch(planetNotFound({
                    "message": "No Results",
                    "items": response.results,
                    "searchStr": searchString,
                    "isFetched": true
                }));
            }
        });
    };
}

function planetFound(data) {
    return {
        type: types.PLANET_FOUND,
        payload: data
    }
}

function planetNotFound(data) {
    return {
        type: types.PLANET_NOT_FOUND,
        payload: data
    }
}