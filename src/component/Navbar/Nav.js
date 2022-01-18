import './nav.css';
import React from 'react';
import {Link} from 'react-router-dom';

 /*
toggle button for changing theme
<div className="form-check form-switch toggler mx-2">
    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  onClick={props.toggleTheme} />
    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckChecked">{props.btn}</label>
</div>
*/

function Nav(props){
   

    return(
        <nav className={props.class} style={props.theme}>
            <div className="name">
                <h1>Test app</h1>
            </div>
            <div id='list' className="links mx-5" >
                <Link to="/"  className="link"  >Home</Link> 
                <Link to="/About"  className="link"   >About</Link>
                <Link to="/Content"  className="link" >Content</Link>
                
                
            </div>

            
        </nav>
    );

}

export default Nav;