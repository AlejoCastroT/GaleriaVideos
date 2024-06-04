import React, { useState } from 'react';
import './VideoUploadForm.css';

const VideoUploadForm = ({ onFormSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
      videoURL: URL.createObjectURL(video),
    };
    onFormSubmit(data);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2 className="form-title">Subir Video</h2>
          <button type="button" className="close-button" onClick={onClose}>↩</button>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Título:</label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Descripción:</label>
          <textarea
            id="description"
            className="form-textarea"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="video" className="form-label">Subir Video:</label>
          <div className="file-input-container">
            <input
              type="file"
              id="video"
              className="form-input file-input"
              accept="video/*"
              onChange={handleVideoChange}
              required
            />
            <label htmlFor="video" className="file-input-label">Elegir archivo</label>
            {video && <span className="file-name">{video.name}</span>}
          </div>
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
};

export default VideoUploadForm;
