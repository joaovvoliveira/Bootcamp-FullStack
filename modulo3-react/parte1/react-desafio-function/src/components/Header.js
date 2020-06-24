import React from "react";

export default function Header(props) {
  const { title } = props;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
    </div>
  );
}
