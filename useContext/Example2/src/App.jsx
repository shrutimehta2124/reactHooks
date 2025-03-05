import React, { useState } from 'react';
import { CounterProvider } from './contexts/CounterContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { UserProvider } from './contexts/UserContext';
import { FormProvider } from './contexts/FormContext';
import { DataProvider } from './contexts/DataContext';

import CounterDisplay from './components/CounterDisplay';
import LanguageSelector from './components/LanguageSelector';
import Profile from './components/Profile';
import Form from './components/Form';
import DataDisplay from './components/DataDisplay';
import OptimizedCounter from './components/OptimizedCounter';

const App = () => {
  // State to track which component is displayed
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to render component based on selected example
  const renderComponent = () => {
    switch (activeComponent) {
      case 'counter':
        return <CounterDisplay />;
      case 'language':
        return <LanguageSelector />;
    
      case 'profile':
        return <Profile />;
      case 'form':
        return <Form />;
      case 'data':
        return <DataDisplay />;
      case 'optimized':
        return <OptimizedCounter />;
      default:
        return null;
    }
  };

  return (
    <UserProvider>
      
        <LanguageProvider>
          <FormProvider>
            <DataProvider>
              <CounterProvider>
                <div className="App">
                  <h1>React Context API Examples</h1>
                  
                  {/* Buttons to toggle components */}
                  <div>
                    <button onClick={() => setActiveComponent('counter')}>Counter Example</button>
                    <button onClick={() => setActiveComponent('language')}>Language Example</button>
                    <button onClick={() => setActiveComponent('profile')}>Profile Example</button>
                    <button onClick={() => setActiveComponent('form')}>Form Example</button>
                    <button onClick={() => setActiveComponent('data')}>Data Example</button>
                    <button onClick={() => setActiveComponent('optimized')}>Optimized Counter</button>
                  </div>
                  
                  {/* Conditionally render the selected component */}
                  {renderComponent()}
                </div>
              </CounterProvider>
            </DataProvider>
          </FormProvider>
        </LanguageProvider>
      
    </UserProvider>
  );
};

export default App;
  