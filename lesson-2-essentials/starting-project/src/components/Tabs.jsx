import React from "react";

export default function Tabs({ children, buttons, buttonsContainer }) {
  const BtnsContainer = buttonsContainer;
  return (
    <>
      {/* This won't work 'cause it will search for a HTML element called 'buttonsContainer'.
    Instead, store the props inside a const with a capital letter and use it from there! */}
      {/* <buttonsContainer>{buttons}</buttonsContainer> */}
      <BtnsContainer>{buttons}</BtnsContainer>
      {children}
    </>
  );
}

// Notes

/* Another way to make it work it's to update the props buttonsContainer for ButtonsContainer directly */
// export default function Tabs({ children, buttons, buttonsContainer }) {
