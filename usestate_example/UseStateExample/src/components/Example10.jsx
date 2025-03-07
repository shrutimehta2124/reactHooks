import { useState } from 'react'


function Example10() {
  const [activeTab,setActivetab] = useState("home")

  return (
    <div>
      <div>
        <button onClick={() => setActivetab("Home")}>Home</button>
        <button onClick={() => setActivetab("About")}>About</button>
        <button onClick={() => setActivetab("Contact")}>Contact</button>
      </div>
      <div>
        {activeTab === "Home" && <p>Welcome to the Home Page!</p>}
        {activeTab === "About" && <p>This is the About Page.</p>}
        {activeTab === "Contact" && <p>Get in touch on the Contact Page.</p>}
      </div>
    </div>
  )
}

export default Example10
