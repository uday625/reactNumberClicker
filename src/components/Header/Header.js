import React from 'react';
import './Header.css';

const Header = () => {
    return ( 

        <nav className="Header navbar navbar-dark bg-dark">
            <div className="Container ">
                <div className="d-flex justify-content-center">
                    <i className="fa fa-hand-pointer fa-4x text-white"></i>
                    <div className="h1 ml-2 my-auto text-light" href="/"> React Number Click </div>
                </div>
            </div>
        </nav>        
     );
}

export default Header;