import React from 'react';
import {Link} from 'react-router-dom';

const Layout1=(props)=>{
    const navStyle={
        position:"fixed",
        top:"0",
        left:"0",
        width:"100%",
        height:"10vh",
        backgroundColor:"rgb(255, 255, 255)",
        display:"flex",
        alignItems:"center"
    };
    const divStyle={
        color: "inherit", /* 移除超連結顏色 */
        marginLeft:"30px",
        position:"fixed",
        backgroundColor:"rgb(255, 255, 255)",
        paddingLeft: "45%",
    };

    return(
      <div>
          <div className="nav-bar" style={navStyle}>
          <div className="nav-brand" style={divStyle}>
                <nav>
                    <Link style={{ textDecoration: 'none',color: "black",fontSize: "1.5em",textAlign: "center" }} to="/third">建材代理</Link>
                </nav>
            </div>
           
          </div>
      </div>
    );
}
export default Layout1;