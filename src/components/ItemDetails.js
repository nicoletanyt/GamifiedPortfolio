import React from "react";

export default function ItemDetails({ sectionInfo }) {
  return (
    <div className="itemDetails">
      <div className="description">
        <h2>{sectionInfo.title}</h2>
        <p>{sectionInfo.details}</p>
        <a href={sectionInfo.link}>{sectionInfo.linkText}</a>
      </div>
      <img
        className="detailImg"
        src={sectionInfo.image}
        alt={sectionInfo.title}
      />
    </div>
  );
}
