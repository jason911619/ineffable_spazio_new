import React from 'react';
import Layout from "./Layout";
import './SecondPage.css';



const SecondPage=()=>{


    return(
        <div>
        <Layout/>

    <div class="main_bg">
        <div class="area1">
        <img src="companyinfo_1.png" ></img>
        <h2>環 保 節 能 建 材</h2>
        <h3>Environmental Material</h3>

        </div>

        <div class="area1">
        <img src="companyinfo_2.png" ></img>
        <h2>設 計 成 像 技 術</h2>
        <h3>Design Visualize App</h3>
        </div>

        <div class="area1">
        <img src="companyinfo_3.png" ></img>
        <h2>設 計 管 理 系 統</h2>
        <h3>Management System</h3>
        </div>
        
        </div>

        </div>

    )
}

export default SecondPage;