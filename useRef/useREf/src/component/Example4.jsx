import React, { useState, useEffect, useRef } from "react";

function Example4() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);  // Reference to the modal container

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Effect hook to add event listener for Escape key when modal is open
  useEffect(() => {
    // Function to handle Escape key press
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();  // Close the modal if Escape key is pressed
      }
    };

    // Add the event listener for keydown (Escape key)
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener when component unmounts or isOpen changes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal}>Open Modal</button>

      {/* Modal content, only shown when isOpen is true */}
      {isOpen && (
        <div
          ref={modalRef}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <h2>Modal Content</h2>
          <p>This is a modal. Press "Escape" to close.</p>
          {/* Button to manually close the modal */}
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}

      {/* Background overlay to darken the rest of the screen when modal is open */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={closeModal} // Close modal if the overlay is clicked
        ></div>
      )}
    </div>
  );
}

export default Example4;
