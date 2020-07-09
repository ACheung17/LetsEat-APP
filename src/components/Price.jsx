import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

function Price(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("Any Amount");
    
    const toggle = () => setDropdownOpen(prevState => !prevState);

    function changeValue(event) {    
        setDropdownValue(event.target.textContent);
        props.setPrice(event.target.textContent);
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="md">
        <DropdownToggle caret color="light">{dropdownValue}</DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={changeValue}>Any Amount</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={changeValue}>$</DropdownItem>
            <DropdownItem onClick={changeValue}>$$</DropdownItem>
            <DropdownItem onClick={changeValue}>$$$</DropdownItem>
        </DropdownMenu>
        </Dropdown>
    );
}

export default Price;