import { useState } from 'react'
import './App.scss';
import Header from '@/laylout/header/Header';
import Index from '@/pages/index/Index';
function App() {

  return (
    <>
      <Header />
      <main>
        <Index />
      </main>
    </>
  )
}

export default App
