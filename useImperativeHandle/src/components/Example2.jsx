import React, { useState, useImperativeHandle, forwardRef } from 'react';

// Child component: Modal
const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return isOpen ? (
    <div className="modal">
      <h2>Modal Content</h2>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  ) : null;
});

// Parent component
function Example2() {
  const modalRef = React.createRef();

  return (
    <div>
      <button onClick={() => modalRef.current.open()}>Open Modal</button>
      <button onClick={() => modalRef.current.close()}>Close Modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

 export default Example2