import React from 'react';
import "./App.css";
import Login from './Components/Login/Login';

export interface AppProps {
  
}
 
const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <Login/>
    </div>
  );
}
 
export default App;
