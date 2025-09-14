import React from "react";
import "./GalleryPage.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
// import image6 from '../images/image6.jpg';
// import image7 from '../images/image7.jpg';
// import image8 from '../images/image8.jpg';
// import image9 from '../images/image9.jpg';
// import image10 from '../images/image10.jpg';

const GalleryPage = () => {
  // Array of image URLs
  const images = [image1, image2, image3, image4, image5]; // Add more images to the array

  return (
    <section id="gallery" className="pic-gallery">
      <div className="pic-container">
        <h2>Photo Gallery</h2>
        <div className="pic-gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="pic-gallery-item">
              <img src={image} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
