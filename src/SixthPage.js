import React from 'react';
import Layout from "./Layout";


const SixthPage=()=>{


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

    const areaSix={
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

        <div className="areaSix" style={areaSix}>
        <img style={{ marginTop: "50px", width: "300px"}} src="./01.png" alt="png"/>
        <h2 style={{ fontWeight:"lighter", fontSize:"18px", color: "white"}}>環 保 節 能 建 材</h2>
        <h3 style={{ fontWeight:"lighter", fontSize:"14px", color: "white"}}>Environmental Material</h3>
        <p style={{ fontSize:"12px", color: "white",textAlign: "left"}}>喜識國際透過內部開發、合作開發、國際代理創新式建材，導入設計專案，達到在最高安全準則下降低污染、降低能源
            消耗，創造生活與設計的新維度</p>
        </div>

    <div className="areaSix" style={areaSix}>
    <img style={{ marginTop: "50px", width: "300px"}} src="./02.png" alt="png"/>
    <h2 style={{ fontWeight:"lighter", fontSize:"18px", color: "white"}}>設 計 成 像 技 術</h2>
    <h3 style={{ fontWeight:"lighter", fontSize:"14px", color: "white"}}>Design Visualize App</h3>
    <p style={{ fontSize:"12px", color: "white",textAlign: "left"}}>透過專業極易操作的軟體，隨時隨地可以將喜識的各累設計物件等比例成像空間中，結合擴增實境與全息影像技術，減少與客戶溝通成本及誤差
        </p>
    </div>

    <div className="areaSix" style={areaSix}>
    <img style={{ marginTop: "50px", width: "300px"}} src="./03.png" alt="png"/>
    <h2 style={{ fontWeight:"lighter", fontSize:"18px", color: "white"}}>設 計 管 理 系 統</h2>
    <h3 style={{ fontWeight:"lighter", fontSize:"14px", color: "white"}}>Management System</h3>
    <p style={{ fontSize:"12px", color: "white",textAlign: "left"}}>落實建材物料的採購、預估用量、實際用量的誤差，並掌握倉儲及海外訂單進貨時間，精準顯示完成時程、利潤、銷售額、客戶管理，讓專案從遠端即時監控，同時減少建材浪費及環境永續</p>
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

export default SixthPage;