import React from "react";

function Result(props) {
    return (
        <div className="myContainer resultContainer">
            <h2 className="result-heading">LET'S EAT ...</h2>
            <div className="row">
                <div className="col-sm-4 img-fluid">
                    <img className="img-fluid placeholder-img" src="https://via.placeholder.com/150" alt="placeholer"/>
                </div> 
                <div className="description col-sm-8">
                    <h3>{props.name}</h3>
                    <div className="txt">{props.pricePoints}</div>
                    <div className="txt">{props.category}</div>
                </div>
            
            </div>
            
        </div>
    );
}

export default Result; 