import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStoryById,
  fetchNextParagraph,
  fetchFirstParagraph,
} from "../../store/readStory/actions";
import { selectStory } from "../../store/readStory/selectors";
import "./readStory.css";

export default function ReadStory() {
  const [paragraphNumber, setParagraphNumber] = useState(2);
  const { id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(selectStory);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchStoryById(id));
    dispatch(fetchFirstParagraph(id, 1));
  }, [dispatch, id,]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      setParagraphNumber(paragraphNumber + 1);
      dispatch(fetchNextParagraph(id, paragraphNumber));
    }
  };

  return (
    <div className="read-story">
      <div className="story-title">
        <h1>{story.title}</h1>
        <h3>Geschreven door: </h3>
        <h3 id='author-name'><em>{story.user.name}</em></h3>
      </div>
      <div className="paragraphs">
        {story.paragraphs.map((paragraph, i) => {
          if(!paragraph) return;
          return <p key={i}>{paragraph.text}</p>;
        })}
      </div>
      <div className="last-paragraph">
        {story.lastParagraph ? (
          <h3>
            <strong>THE END</strong>
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
