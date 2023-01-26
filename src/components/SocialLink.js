import React from "react";

export default function SocialLink({ href, name, icon }) {
  return (
    <a className="socialLink toolbarBtn" href={href}>
      {icon}
      <span className="toolbarName">{name}</span>
    </a>
  );
}
