import React from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { NavLink } from "react-router-dom";
import { updateTitleClicked } from "../../store/readStory/actions";
const moment = require("moment");

export default function Story(props) {
  const time = moment(props.createdAt).fromNow();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(updateTitleClicked(props.id, props.titleClicked));
  };

  return (
    <div className="story-container">
      <img width="70" height="90" alt="" src={props.imgUrl}/>
      <div className="story-text">
        <NavLink
          to={`/stories/${props.id}`}
          exact={true}
          onClick={clickHandler}
        >
          <h3 style={{ fontFamily: "sans serif", fontSize: "30px", margin: 0 }}>
            {props.title}{" "}
          </h3>
        </NavLink>
  <span className="author"> door: {props.user.name}</span> <br/>
        <p>
         <strong>Type: </strong> {props.type} (
          <em>{props.genre}</em>) Aantal woorden: {props.wordCount} <span className='age'>Leeftijd: {props.pg}+</span>
        </p>
        <span className="posted">Posted: {time} </span>
      </div>
    </div>
  );
}
