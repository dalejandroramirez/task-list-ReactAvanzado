import * as React from 'react';
import Tasklist from './lists/TodoList';
import Settings from './settings/Settings';
import "../styles/css/index.scss"
import { render } from '@testing-library/react';

/**
//  Funcion anonima para crear una componente principal
 * @returns {React.Component} Componente principal de la app
 */


export default function App() {

  return (
    <div id="App" >
      <Tasklist />
      <hr style={{ marginTop: 20, marginBottom: 20 }} />
      <Settings />
    </div>
  );
}

