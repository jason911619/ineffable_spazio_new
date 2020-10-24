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
        marginLeft:"17%",
        height:"25px",
        width:"25px",
        borderRadius:"1px",
        backgroundColor:"black"
    };
    const inputStyle={
        marginLeft:"30px",
        padding:"0px 7px",
        height:"25px",
        width:"25%",
        borderRadius:"2px",
        border:"none",
        backgroundImage:"url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png')",
        backgroundPosition:"97% 50%",
        backgroundSize:"auto 80%",
        backgroundRepeat:"no-repeat"
    };
    const contactStyle={
        marginRight:"30px",
        flex: "1",
        textAlign:"right",
        color:"white",
        backgroundColor:"rgb(0, 0, 0)"
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
                <img style={{height:"120%"}} src="./logo.jpg" alt="icon"/>
            </div>
            <input placeholder="搜尋" style={inputStyle}/>
            <div className="nav-contact" style={contactStyle}>
                <h2> Contact </h2>
            </div>
          </div>
          <div className="index-container" style={{marginTop:"43px"}}>
              {props.children}
          </div>

      </div>
    );
}
export default Layout;