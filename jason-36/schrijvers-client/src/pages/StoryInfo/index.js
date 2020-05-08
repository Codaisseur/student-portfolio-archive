import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { selectUser } from "../../store/user/selectors";
import { fetchStoryInfo } from "../../store/storyInfo/actions";
import { selectStoryInfo } from "../../store/storyInfo/selectors";
import "./storyinfo.css";
import HeatMap from "./HeatMap";

export default function StoryInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectUser);
  const info = useSelector(selectStoryInfo);

  useEffect(() => {
    if (!id) return;
    if (!user.id) return;
    dispatch(fetchStoryInfo(user.id, id));
  }, [id, user.id, dispatch]);

  return (
    <div className="story-info-container">
      <div className='storyInfo-buttons'>
        <Button variant='secondary' as={NavLink} to="/profile">Go back</Button>
      </div>
      <h2>{info.title}</h2>
      <p style={{ fontWeight: "normal" }}>
        type: <strong>{info.type}</strong> genre: <strong>{info.genre}</strong>{" "}
      </p>
      <h5>
        Titel geklikt: <strong>{info.titleClicked}</strong> keer{" "}
      </h5>
      <div className="heatmap-container">
        <p>
          Paragraaf lengte: <strong>{info.paragraphs.length}</strong>
        </p>
        <HeatMap {...info} />
      </div>
    </div>
  );
}
