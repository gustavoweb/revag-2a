import { useState } from 'react'
import './App.css'
import Logo from "./assets/logo.svg"
import { Joystick, GamepadDirectional, Gamepad2 } from 'lucide-react';

export default function App() {

  return (
    <>
      <main>
        <header>
          <div className="icones">
            <Joystick className='icon' />
          </div>
          <div className="icones">
            <GamepadDirectional  className='icon'/>
          </div>
          <div className="icones">
            <Gamepad2  className='icon'/>
          </div>
        </header>
        <section>
          <h1>Exemplo Revisão</h1>
        </section>
        <footer>
          <img src={Logo} alt="" />
        </footer>
      </main>
    </>
  )
}

