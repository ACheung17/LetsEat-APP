import React, { useState, useEffect } from "react";
import HomeNav from "./HomeNav";
import Categories from "./Categories";
import Price from "./Price";
import { Button, Form, FormGroup } from "reactstrap";
import Result from "./Result";

function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const [category, setCategory] = useState("Anything");
    const [price, setPrice] = useState("Any Amount");
    const [selected, setSelected] = useState({
        id: "",
        name: "",
        pricePoints: "",
        category: ""
    });
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        fetch("https://infinite-dawn-76227.herokuapp.com/restaurants")
            .then(res => res.json())
            .then(data => setRestaurants(data));
            
    }, []);
    
    function getRestaurant(event) {  
        console.log(category);
        console.log(price);
        let tmp = []
        
        if (category === "Anything" && price === "Any Amount"){            
           tmp = ([...restaurants]);            
        } 
        else if (category !== "Anything" && price === "Any Amount") {
            tmp = (restaurants.filter(rest => {
                    return (rest.category === category);
                }));
        } 
        else if (category === "Anything" && price !== "Any Amount") {
            tmp = (restaurants.filter(rest => {
                
                return (rest.pricePoints === price);
            }));
        }   
        else {
            tmp = (restaurants.filter(rest => {
                return (rest.category === category && rest.pricePoints === price);
            })); 
        }           
        let ran = Math.random() * tmp.length;
        ran = Math.floor(ran);
        setSelected(tmp[ran]);  
        console.log(tmp);
        console.log(ran);
        console.log(tmp[ran]);
        
        console.log(selected);
        
        setShowResult(true);        
        
        event.preventDefault();
    }   
    
    return (
        <div>
            <HomeNav />
            <div className="myContainer">
                <Form>
                    <div className="insideContainer">
                        
                            <FormGroup>
                                <h4 className="headings">What are you feeling for?</h4>
                                {/* <Categories setCat={cat => {getRestaurantByCategory(cat)}} /> */}
                                <Categories setCat={cat => setCategory(cat)} />
                            </FormGroup>
                            <FormGroup>
                                <h4>How much do you want to spend?</h4>
                                {/* <Price setPrice={cat => {getRestaurantByCategory(cat)}} /> */}
                                <Price setPrice={p => setPrice(p)} />
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    color="danger"
                                    style={{ fontFamily: "Contrail One" }}
                                    type="submit"
                                    onClick={getRestaurant}>
                                    LET'S EAT
                                </Button>
                            </FormGroup>
                    </div>
                </Form>
            </div>
            <div >
                {showResult && <Result name={selected.name} pricePoints={selected.pricePoints} category={selected.category} />}
            </div>

        </div>
    );
}

export default Home;