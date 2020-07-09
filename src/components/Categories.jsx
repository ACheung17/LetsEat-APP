import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

function Categories(props) {
    const [categories, setCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("Anything");

    useEffect(() => {
        fetch("https://infinite-dawn-76227.herokuapp.com/category")
            .then(res => res.json())
            .then(data => setCategories(data));
            
    }, [])

    const toggle = () => setDropdownOpen(prevState => !prevState);

    function changeValue(event) {    
        setDropdownValue(event.target.textContent);
        
        props.setCat(event.target.textContent);
    }
    
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="md">
        <DropdownToggle caret color="light">{dropdownValue}</DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={changeValue}>Anything</DropdownItem>
            <DropdownItem divider />
            {categories.map(category =>
                <DropdownItem key={category.id} onClick={changeValue}>{category.name}</DropdownItem>
            )}
        </DropdownMenu>
        </Dropdown>
    );
}

export default Categories;