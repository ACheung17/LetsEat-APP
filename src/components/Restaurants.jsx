import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import HomeNav from "./HomeNav";

function Restaurants(){
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        fetch("https://infinite-dawn-76227.herokuapp.com/restaurants")
            .then(res => res.json())
            .then(data => setRestaurants(data));
    }, [])

    return (
        <div>
            <HomeNav />
            <title></title>
            <div className="myContainer">
                <ListGroup>
                    {restaurants.map(rest => 
                        <ListGroupItem key={rest.id}>
                           <h5>{rest.name}</h5> 
                            <div>{rest.pricePoints}</div>
                            <div>{rest.category}</div>
                        </ListGroupItem>
                    )}
                    
                </ListGroup>
            </div>
        </div>
    );
}

export default Restaurants;