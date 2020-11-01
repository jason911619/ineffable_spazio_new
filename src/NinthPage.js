import React from 'react';
//import {Link} from 'react-router-dom';
import Layout from './Layout';
import './NinthPage.css';

const NinthPage=(props)=>{

    

    return(
      <div>
        <Layout/>

        <div className="main_bg">

            <div className="area1_1">
            <p>喜 識 國 際 </p>
            <div className="hr_window"> 
            <hr/>
      

            <div className="area2">
                <div className="area2_1" >
                    <p>亞太區  台北辦公室</p>
                    <p>台北市忠孝東路一段49巷17號</p>
                    <p>info@ineffable-spazio.com</p>
                    <p>886 2 3393 2500</p>
                </div>

                <div className="area2_2">
                    <p>Asia Pacific   Taipei Office</p>
                    <p>No.17, Ln49, Zhongxiao E. Rd., Taipei city</p>
                </div>
            </div>
            </div>
        </div>

</div>


<footer id="footerContainer">
<div className="inner">
<p id="copyright">Copyright&copy; Ineffable Spazio Co.,Ltd. All Rights Reserved.</p>
</div>
</footer>

      </div>
    );
}
export default NinthPage;