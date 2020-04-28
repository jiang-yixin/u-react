import React from 'react';

const CommentDetail = (props) => {
  return (
      <div className="comment">
          <a className="avatar">
              <img src={props.avatar} />
          </a>
          <div className="content">
              <a className="author">
                  {props.author}
              </a>
              <div className="metadata">
                  <div className="date">{props.time}</div>
              </div>
              <div className="text">
                  {props.text}
              </div>
          </div>
      </div>
  );
};

export default CommentDetail;