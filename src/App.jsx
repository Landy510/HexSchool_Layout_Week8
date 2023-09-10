import { useState } from 'react'
import './App.scss';
import Header from '@/laylout/header/Header';
function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className="text-3xl font-bold underline bg-red-200 text-primary-300">
            bobbyhadz.com
          </h1>
          <button className="btn">Click Me</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
