import React, { useState } from 'react';
import './App.css';
import VideoUploadForm from './components/VideoUpload/VideoUploadForm';
import VideoCard from './components/VideoCar/VideoCard';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data) => {
    setVideos([...videos, data]);
    setShowForm(false);
  };

  const handleDelete = (index) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este video?')) {
      const newVideos = videos.filter((_, i) => i !== index);
      setVideos(newVideos);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="app-container">
      {!showForm && (
        <button className="add-button" onClick={handleAddClick}>
          Agregar
        </button>
      )}
      {showForm && <VideoUploadForm onFormSubmit={handleFormSubmit} onClose={handleCloseForm} />}
      <div className="videos-container">
        {videos.map((video, index) => (
          <VideoCard key={index} data={video} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
