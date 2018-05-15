import React from 'react';


import '../planets.css';

const Results = props => {
    console.log(props.items);
    return (
      <ul className="results">
        {props.items.map((item, i) => {
            return (
                <li className="results__item" key={i}>
                    <h3 className="results__title">
                        {item.name}
                    </h3>

                <ul className="results__info">
                    <li>Terrain <span>{item.terrain}</span> </li>
                    <li>Gravity <span>{item.gravity}</span> </li>
                    <li>Population <span>{item.population}</span> </li>
                </ul>
            </li>)
        })}
      </ul>
    )
};

export default Results;