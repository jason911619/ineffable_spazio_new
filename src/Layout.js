import React from 'react';
import {Link} from 'react-router-dom';

const Layout=(props)=>{
    const navStyle={
        position:"fixed",
        top:"0",
        left:"0",
        width:"100%",
        height:"10vh",
        backgroundColor:"rgb(0, 0, 0)",
        display:"flex",
        alignItems:"center"
    };
    const divStyle={
        color: "inherit", /* 移除超連結顏色 */
        marginLeft:"30px",
        position:"fixed",
   
        backgroundColor:"rgb(0, 0, 0)"
    };
    const iconStyle={
        marginLeft:"18%",
        height:"26px",
        width:"25px",
        borderRadius:"1px",
        backgroundColor:"black"
    };
    const contactStyle={
        marginRight:"30px",
        flex: "1",
        textAlign:"right",
        color:"white",
    };

    return(
      <div>
        <div className="nav-bar" style={navStyle}>
            <div className="nav-brand" style={divStyle}>
                <nav>
                <Link style={{ textDecoration: 'none',color: "white",fontSize: "1.5em" }} to="/">Infffable Spazio</Link>
                </nav>
            </div>
            <div  className="icon" style={iconStyle}>
            <img style={{height:"120%",zIndex:"2",}} src="./logo.jpg" alt="icon"/>
            </div>
            <div className="nav-contact" style={contactStyle}>
                <nav>
                <Link style={{ textDecoration: 'none',color: "white",fontSize: "1.5em" }} to="/ninth">Contact</Link>
                </nav>
            </div>
        </div>
          <div className="index-container" style={{marginTop:"43px"}}>
              {props.children}
          </div>

      </div>
    );
}
export default Layout;