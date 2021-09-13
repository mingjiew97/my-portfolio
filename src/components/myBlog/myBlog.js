import React, { useState, useEffect, useRef } from "react";
import "../myBlog/myBlog.css";

export const MyBlog = (props) => {
  return (<div className="page">
      <div className="my-blog-container">
        <div className="my-blog-title"></div>
        <div className="my-blog-content"></div>
      </div>
  </div>);
};
