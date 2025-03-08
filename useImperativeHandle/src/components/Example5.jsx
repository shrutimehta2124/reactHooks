import React, { useState, useImperativeHandle, forwardRef } from 'react';

// Child component: DraggableItem
const DraggableItem = forwardRef((props, ref) => {
  const [isDragging, setIsDragging] = useState(false);

  useImperativeHandle(ref, () => ({
    startDrag: () => setIsDragging(true),
    endDrag: () => setIsDragging(false),
  }));

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isDragging ? 'yellow' : 'green',
        cursor: 'move',
      }}
      draggable
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      Drag Me
    </div>
  );
});

// Parent component
function Example5() {
  const dragRef = React.createRef();

  return (
    <div>
      <button onClick={() => dragRef.current.startDrag()}>Start Drag</button>
      <button onClick={() => dragRef.current.endDrag()}>End Drag</button>
      <DraggableItem ref={dragRef} />
    </div>
  );
}

export default Example5