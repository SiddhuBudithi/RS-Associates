import React from "react";
import "./Css/MapSection.css";

export default function MapSection() {
  return (
    <div className="mapSection">
      <iframe
        title="RS Associates Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6242.09793758436!2d81.67310955202338!3d16.76019873073126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b700223e8d4f%3A0xe83df7a3337cced2!2sTATA%20AIA%20LIFE%20INSURANCE%20RS%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1755702053096!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
