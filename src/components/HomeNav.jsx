import React, { useState } from 'react';
import { Nav, Navbar, NavLink, NavbarBrand, Collapse, Card, CardBody, Container, Button } from 'reactstrap';

function HomeNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="danger">
                <NavbarBrand href="#/">LET'S EAT</NavbarBrand>
                <Nav className="ml-auto">
                    <Button onClick={toggle} color="danger">About</Button>
                    <NavLink href="#/restaurants">Restaurants</NavLink>
                </Nav>
            </Navbar>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <Container>
                        <h4>Can't decide where to eat?</h4>
                        <div><span className="brand-font">LET'S EAT</span> will help you pick a place that you'd like. Filters can be added for a better match.</div>
                        <p>For more info and the code of this app: <a href="https://github.com/ACheung17/LetsEat-APP">https://github.com/ACheung17/LetsEat-APP</a></p>
                        </Container>
                    
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default HomeNav;
