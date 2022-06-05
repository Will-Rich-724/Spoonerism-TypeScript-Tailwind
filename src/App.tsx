import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpoonForm from './components/SpoonForm';

function App() {
  return (
    <div className='h-screen flex justify-center align-center bg-gradient-to-tr from-sky-500 to-indigo-500'>
      <SpoonForm />
    </div>
  );
}

export default App;
