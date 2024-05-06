import React, {useState } from 'react'
// import './App.css'
import { Login,SignIn } from './components/Index'

export function App() {

    const [selectedComponent, setSelectedComponent] = useState('login');

    const handleSelectComponent = (component) => {
      setSelectedComponent(component);
    };

  return (
    <>

     {selectedComponent === 'login' ? <Login handleSelectComponent={handleSelectComponent} /> : <SignIn handleSelectComponent={handleSelectComponent} />}
      
      
    </>
  )
}
