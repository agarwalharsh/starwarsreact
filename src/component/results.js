import React, { Component } from 'react';


import '../css/results.css';

const Results = props => {
    return (
      <div className="results">
        {props.items.map((item, i) => {
            return (
                <div className="result-item-wrap" key={i}>
                <div className="results__item">
                    <h3 className="results__title">
                        {item.name}
                    </h3>

                    <div className="results__info">
                        <div>Diameter- <span>{item.diameter}</span> </div>
                        <div>Gravity- <span>{item.gravity}</span> </div>
                        <div>Population- <span>{item.population}</span> </div>
                    </div>
            </div>
            </div>)
        })}
      </div>
    )
};

export default Results;