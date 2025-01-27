
import React from 'react';

export default function Projects() {
  // Directly reference the static image
  const imagePath = '/assets/bitcoinimage.jpeg';

  return (
    <div>
      <h1>Projects</h1>
      {/* Remove the file input since we're not uploading */}
      <div>
        <img 
          src={imagePath} 
          alt="Bitcoin Image" 
          style={{ width: '200px', margin: '10px' }}
        />
      </div>
    </div>
  );
}

/**
 * 
 * import React, { useState } from "react";

export default function Projects() {
  const [images, setImages] = useState([]);

  // This function simulates what might happen in your Todo component
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages(prevImages => [...prevImages, { name: file.name, url: imageUrl }]);
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <input type="file" onChange={handleFileUpload} accept="image/*" />
      <div>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.url} 
            alt={image.name} 
            style={{ width: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
}

 * 
 * 
 * 
 * import React from 'react'

const projects = () => {
  return (
    <div>
        <h1>Projects</h1>
    </div>
  )
}

export default projects
 * 
 */