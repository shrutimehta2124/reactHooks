import { useState } from 'react';
import Example1 from './component/Example1.jsx';
import Example2 from './component/Example2.jsx';
import Example3 from './component/Example3.jsx';
import Example4 from './component/Example4.jsx';
import Example5 from './component/Example5.jsx';
import Example6 from  './component/Example6.jsx';
import Example7 from './component/Example7.jsx';
import Example8 from './component/Example8.jsx';
import Example9 from './component/Example9.jsx';
import Example10 from './component/Example10.jsx';
import './App.css';

function App() {
  // Create a state object to manage visibility for all 10 examples
  const [showExamples, setShowExamples] = useState({
    example1: false,
    example2: false,
    example3: false,
    example4: false,
    example5: false,
    example6: false,
    example7: false,
    example8: false,
    example9: false,
    example10: false,
  });

  const toggleExample = (exampleKey) => {
    setShowExamples((prevState) => ({
      ...prevState,
      [exampleKey]: !prevState[exampleKey],
    }));
  };

  return (
    <>
      <h3>useEffect Examples</h3>
      {/* Example 1 */}
      <div>
        <button onClick={() => toggleExample('example1')}>
          {showExamples.example1 ? 'Hide' : 'Show'} Example 1 (Word count)
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

      {/* Example 6 */}
      <div>
        <button onClick={() => toggleExample('example6')}>
          {showExamples.example6 ? 'Hide' : 'Show'} Example 6
        </button>
        {showExamples.example6 && <Example6 />}
      </div>

      {/* Example 7 */}
      <div>
        <button onClick={() => toggleExample('example7')}>
          {showExamples.example7 ? 'Hide' : 'Show'} Example 7
        </button>
        {showExamples.example7 && <Example7 />}
      </div>

      {/* Example 8 */}
      <div>
        <button onClick={() => toggleExample('example8')}>
          {showExamples.example8 ? 'Hide' : 'Show'} Example 8
        </button>
        {showExamples.example8 && <Example8 />}
      </div>

      {/* Example 9 */}
      <div>
        <button onClick={() => toggleExample('example9')}>
          {showExamples.example9 ? 'Hide' : 'Show'} Example 9
        </button>
        {showExamples.example9 && <Example9 />}
      </div>

      {/* Example 10 */}
      <div>
        <button onClick={() => toggleExample('example10')}>
          {showExamples.example10 ? 'Hide' : 'Show'} Example 10
        </button>
        {showExamples.example10 && <Example10 />}
      </div>
    </>
  );
}

export default App;
