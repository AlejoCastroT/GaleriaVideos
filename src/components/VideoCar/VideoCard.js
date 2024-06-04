import React from 'react';
import './VideoCard.css';

const VideoCard = ({ data, onDelete }) => {
  return (
    <div className="card-container">
      <div className="card">
        <button className="delete-button" onClick={onDelete}>X</button>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
        <video className="card-video" controls>
          <source src={data.videoURL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoCard;
