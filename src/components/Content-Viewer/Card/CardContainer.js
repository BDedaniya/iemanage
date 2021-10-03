import React from "react";
import './CardContainer.css';
import './Card';
import Card from "./Card";
const CardContainer = (props) => {
    return <div className="cardcontainer">
        {props.dataList.map(Data => <Card key={Data.key} type={props.type} data={Data}/>)}
    </div>
}
export default CardContainer;