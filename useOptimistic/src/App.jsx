import { useState } from 'react';
import Example1 from './components/Example1.jsx';
import Example2 from './components/Example2.jsx';
import Example3 from './components/Example3.jsx';
// Import other examples similarly
import Example4 from './components/Example4.jsx';
import Example5 from './components/Example5.jsx';
import './App.css';

function App() {
  // Create a state object to manage visibility for all 10 examples
  const [showExamples, setShowExamples] = useState({
    example1: false,
    example2: false,
    example3: false,
    example4: false,
    example5: false,
  });

  const toggleExample = (exampleKey) => {
    setShowExamples((prevState) => ({
      ...prevState,
      [exampleKey]: !prevState[exampleKey],
    }));
  };

  return (
    <>
      <h3>useOptimstic Examples</h3>
      {/* Example 1 */}
      <div>
        <button onClick={() => toggleExample('example1')}>
          {showExamples.example1 ? 'Hide' : 'Show'} Example 1
        </button>
        {showExamples.example1 && <Example1 />}
      </div>

      {/* Example 2 */}
      <div>
        <button onClick={() => toggleExample('example2')}>
          {showExamples.example2 ? 'Hide' : 'Show'} Example 2
        </button>
        {showExamples.example2 && <Example2 />}
      </div>

      {/* Example 3 */}
      <div>
        <button onClick={() => toggleExample('example3')}>
          {showExamples.example3 ? 'Hide' : 'Show'} Example 3
        </button>
        {showExamples.example3 && <Example3 />}
      </div>

      {/* Example 4 */}
      <div>
        <button onClick={() => toggleExample('example4')}>
          {showExamples.example4 ? 'Hide' : 'Show'} Example 4
        </button>
        {showExamples.example4 && <Example4 />}
      </div>

      {/* Example 5 */}
      <div>
        <button onClick={() => toggleExample('example5')}>
          {showExamples.example5 ? 'Hide' : 'Show'} Example 5
        </button>
        {showExamples.example5 && <Example5 />}
      </div>
    </>
  );
}

export default App;
