import React from 'react';
import Layout from "./Layout";
import './SecondPage.css';
import {Link} from 'react-router-dom';


const SecondPage=()=>{

    const divStyle={
        zIndex: "2",
    };
    
    return(
        <div>
        <Layout/>

    <div className="main_bg" style={divStyle}>

        <div className="area1">
        <img src="./companyinfo_1.png" alt="png"/>
        <nav>
        <Link style={{ textDecoration: 'none',color: "white",fontSize: "1.5em", 
        marginTop: "-55vh",marginLeft: "-7vw",  zIndex:"2",position: "absolute",textAlign: "center"  }} 
        h2 to="/third">環 保 節 能 建 材</Link>
        </nav>

        <h3>Environmental Material</h3>
        </div>

        <div className="area1">
        <img src="./companyinfo_2.png" alt="png"/>
        <nav>
        <Link style={{ textDecoration: 'none',color: "white",fontSize: "1.5em", 
        marginTop: "-55vh",marginLeft: "-7vw",  zIndex:"2",position: "absolute",textAlign: "center"  }} 
        h2 to="/fourth">設 計 成 像 技 術</Link>
        </nav>

        <h3>Design Visualize App</h3>
        </div>

        <div className="area1">
        <img src="./companyinfo_3.png" alt="png"/>
        <nav>
        <Link style={{ textDecoration: 'none',color: "white",fontSize: "1.5em", 
        marginTop: "-55vh",marginLeft: "-3.5vw",  zIndex:"2",position: "absolute",textAlign: "center"  }} 
        h2 to="/fifth">保 養 品</Link>
        </nav>

        <h3>Care products</h3>
        </div>
        
    </div>

        </div>

    )
}

export default SecondPage;