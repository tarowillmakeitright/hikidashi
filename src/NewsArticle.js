import React from "react";
import Button from "@mui/material/Button";
function NewsArticle({ data }) {
  return (
    <div className="news">
      <img src={data.urlToImage} alt="thumbnail"/>
      <h4 className="news__title">{data.title}</h4>
      <Button>
        <a href={data.url}>
          読む
        </a>
      </Button>
    </div>
  );
}

export default NewsArticle;


 
