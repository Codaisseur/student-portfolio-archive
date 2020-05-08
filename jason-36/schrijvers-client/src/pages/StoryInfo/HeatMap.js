import React from "react";

export default function HeatMap(props) {
  const timesClicked = props.titleClicked;

  const coloredParagraphs = props.paragraphs.map((para) => {
    return {
      ...para,
      percentile: (para.timesRead / timesClicked) * 100,
    };
  });

  return (
    <div className="heatmap">
      <div className="heatmap-paragraphs">
        
        {coloredParagraphs.map((paragraph) => {
          
          let color;
          if (paragraph.percentile > 0 && paragraph.percentile <= 25) {
            color = "#f26161";
          } else if (paragraph.percentile > 25 && paragraph.percentile <= 50) {
            color = "#f03939";
          } else if (paragraph.percentile > 50 && paragraph.percentile <= 75) {
            color = "#ea0909";
          } else if (paragraph.percentile > 75) {
            color = "#9a0707";
          } else {
            color = "white";
          }
          let percentile;
          if(Math.round(paragraph.percentile) === 0){
            percentile = 0;
          } else if (!Math.round(paragraph.percentile)) {
            percentile ='-'
          } else {
            percentile = Math.round(paragraph.percentile)
          }
          return (
            <div key={paragraph.id}>
              <p>
                <span>
                  Paragraaf: <strong>{paragraph.paragraphNumber}</strong>
                </span>
                {"  "}
                <span>
                  Aantal keer gelezen: <strong>{paragraph.timesRead}</strong>
                </span>
                {"  "}
                <span>
                  Percentile: <strong>{percentile}%</strong>
                </span>
              </p>
              <div
                className="heat-paragraph"
                style={{ backgroundColor: color }}
              >
                <p>{paragraph.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
