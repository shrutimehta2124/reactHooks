import { useState } from 'react'


function Example5() {
   // useState hook to manage the visibility of content
  // 'isVisible' determines whether the content is shown or hidden
  // 'setIsVisible' is the function to update the state
  const [isVisible, setisVisible] = useState(false)// Boolean state value for visibility toggle

  return (
    <>

        {/* Button to toggle the visibility of content */}
      <button onClick={() => setisVisible(!isVisible)}>Toggle Content</button>
      {/* Conditional rendering: content appears only if 'isVisible' is true */}
      {isVisible && <p>The content ...</p>}
    </>
  )
}

export default Example5
