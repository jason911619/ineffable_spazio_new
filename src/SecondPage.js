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
            <Link style={{ textDecoration: 'none',color: "white",fontSize: "1.5em", marginTop: "-50vh", zIndex:"2" }} to="/third">66666666666666</Link>
        </nav>
        <h2>環 保 節 能 建 材</h2>
        <h3>Environmental Material</h3>
        </div>

        <div className="area1">
        <img src="./companyinfo_2.png" alt="png"/>
        <h2>設 計 成 像 技 術</h2>
        <h3>Design Visualize App</h3>
        </div>

        <div className="area1">
        <img src="./companyinfo_3.png" alt="png"/>
        <h2>設 計 管 理 系 統</h2>
        <h3>Management System</h3>
        </div>
        
    </div>

        </div>

    )
}

export default SecondPage;