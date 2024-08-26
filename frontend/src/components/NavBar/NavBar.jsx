import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.scss";

const NavBar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, username } = useSelector((state) => state.auth);

    const handlePlusIconClick = () => {
        if (isAuthenticated) {
            navigate("/stories/create");
        } else {
            alert("Please Login to create a new story");
            navigate("/login");
        }
    };

    const handleUserIconClick = () => {
        if (isAuthenticated) {
            navigate("/myaccount");
        } else {
            alert("Please Login to create a new story");
            navigate("/login");
        }
    };

    const handleHomeNavigate = () => {
        navigate("/");
    };

    const handleCompleteNavigate = () => {
        navigate("/completed/stories");
    };

    const handleOnGoingNavigate = () =>{
        navigate('/ongoing/stories')
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">STORY CRAFT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleHomeNavigate}>Home</Nav.Link>
                        <Nav.Link onClick={handleCompleteNavigate}>Completed</Nav.Link>
                        <Nav.Link onClick={handleOnGoingNavigate}>On-Going</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="icon" onClick={handlePlusIconClick}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </Nav.Link>
                        <Nav.Link className="icon" onClick={handleUserIconClick}>
                            <FontAwesomeIcon icon={faUser} />
                            {isAuthenticated && username && <span className="username">{username}</span>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
