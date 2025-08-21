import { useEffect, useState } from "react";
import "./GalleryPage.css";

export default function GalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call your backend API that serves gallery data from MongoDB
    fetch("http://localhost:5000/api/gallery") // replace with your backend URL
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gallery:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading gallery...</p>;
  }

  return (
    <section className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div key={item._id} className="gallery-card">
            <img src={item.imageUrl} alt={item.title || "Gallery Image"} />
            {/* <p>{item.title}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
