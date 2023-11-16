import React from "react";

export default function Section({ title, children, ...props }) {
    // With this ...props, approach, more props can be added dynamically
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
