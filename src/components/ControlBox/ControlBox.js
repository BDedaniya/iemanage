import React from "react";
import './ControlBox.css';

const ControlBox = (props) => {
    return(
        <div className="controlbox">
            <div className="tabchanger">
                <button className="tabchanger_btn tabchanger_btn-active">Details</button>
                <button className="tabchanger_btn">By Category</button>
            </div>
            <div className="monthchanger">
                <select id="homepage_month" onChange={props.setMonth} value={props.month} className="monthchanger_select">
                    <option value="12" >All</option>
                    <option value="0" >Jan</option>
                    <option value="1" >Feb</option>
                    <option value="2" >Mar</option>
                    <option value="3" >Apr</option>
                    <option value="4" >May</option>
                    <option value="5" >Jun</option>
                    <option value="6" >Jul</option>
                    <option value="7" >Aug</option>
                    <option value="8" >Sep</option>
                    <option value="9" >Oct</option>
                    <option value="10" >Nov</option>
                    <option value="11" >Dec</option>
                </select>
                <select id="homepage_year" value={props.year} onChange={props.setYear} className="monthchanger_select">
                    <option value="2016" >2016</option>
                    <option value="2017" >2017</option>
                    <option value="2018" >2018</option>
                    <option value="2019" >2019</option>
                    <option value="2020" >2020</option>
                    <option value="2021" >2021</option>
                    <option value="2022" >2022</option>
                    <option value="2023" >2023</option>
                    <option value="2024" >2024</option>
                    <option value="2025" >2025</option>
                </select>
            </div>
        </div>
    );
}
export default ControlBox;