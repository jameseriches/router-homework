import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <Menu>
            <Link to='/'><Menu.Item>Reddit Home</Menu.Item></Link>
            <Link to='/'><Menu.Item>Contact Us</Menu.Item></Link>
            <Link to='/'><Menu.Item>Posts</Menu.Item></Link>
        </Menu>
    )
    
    }
    
    export default NavBar;