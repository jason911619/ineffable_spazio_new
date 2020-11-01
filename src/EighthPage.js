import React from 'react';
import Layout from "./Layout";


const EighthPage=()=>{

    const header={
        width: "100%",
        height: "80px",
        backgroundColor: "black",
    };

    const mainBg={
        backgroundColor: "black",
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    };

    const areaSeven={
        width: "290px",
        height: "510px",
        textAlign: "center",
    };

    const footerContainer={
        position: "fixed",
        bottom: "0",
    };

    return(
        <div>
        <Layout/>
        <div className="header" style={header}></div>
            <div className="main_bg" style={mainBg}>
                <div className="areaSeven" style={areaSeven}>
                <img style={{ marginTop: "50px", width: "300px"}} src="./04.png" alt="png"/>
                <h2 style={{ fontWeight:"lighter", fontSize:"18px", color: "white"}}>保養品1</h2>
                <h3 style={{ fontWeight:"lighter", fontSize:"14px", color: "white"}}>Special Standard</h3>
                <p style={{ fontSize:"12px", color: "white"}}>無塵室、醫院、診所、電影院、電影場景</p>
                </div>

                <div className="areaSeven" style={areaSeven}>
                <img style={{ marginTop: "50px", width: "300px"}} src="./05.png" alt="png"/>
                <h2 style={{ fontWeight:"lighter", fontSize:"18px", color: "white"}}>保養品2</h2>
                <h3 style={{ fontWeight:"lighter", fontSize:"14px", color: "white"}}>Commercial Space</h3>
                <p style={{ fontSize:"12px", color: "white"}}>餐飲空間、服飾空間、量販店、辦公場地</p>
                </div>

                <div className="areaSeven" style={areaSeven}>
                <img style={{ marginTop: "50px", width: "300px"}} src="./06.png" alt="png"/>
                <h2 style={{ fontWeight:"lighter", fontSize:"18px", color: "white"}}>保養品3</h2>
                <h3 style={{ fontWeight:"lighter", fontSize:"14px", color: "white"}}>Residence Space</h3>
                <p style={{ fontSize:"12px", color: "white"}}>住宅、透天厝、大樓公設、別墅</p>
                </div>

            </div>

            <footer id="footerContainer" style={footerContainer}>
            <div className="inner">
                <p id="copyright">Copyright&copy; Ineffable Spazio Co.,Ltd. All Rights Reserved.</p>
            </div>
            </footer>
        </div>
    )
}

export default EighthPage;