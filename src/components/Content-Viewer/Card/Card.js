import React from "react";
import './Card.css';
//import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css';
const Card = (props) => {
    return <div className="card">
        <div className="card__part1">
            <ul>
                <li className="card__name">{props.data.name}</li>
                <li className="card__cat__des__date">Category &nbsp;&nbsp;: {props.data.category}</li>
                <li className="card__cat__des__date">Discription : {props.data.discription}</li>
            </ul>
        </div>
        <div className="card__part2">
            <ul>
                <li className={props.type}><i className="mi-rs">₹ </i>{props.data.amount}</li>
                <li className="card__cat__des__date">{props.data.date}</li>
            </ul>
        </div>
        <div className="card__controls"><i className="bi bi-pencil-fill" ></i><i className="bi bi-trash-fill"></i></div>
    </div>
}
export default Card;