import * as React from 'react';
import Tasklist from './lists/TodoList';
import Settings from './settings/Settings';
import "../styles/css/index.scss"
import "../../index.css"
import { render } from '@testing-library/react';

import { motion, AnimatePresence } from "framer-motion"

/**
//  Funcion anonima para crear una componente principal
 * @returns {React.Component} Componente principal de la app
 */


export default function App() {
  const [showSetting, setShowSetting] = React.useState(false);
  return (
    <div id="App" className='h-screen p-4 flex flex-col App bg-gray-100' >
      <Tasklist showSetting={showSetting} setShowSetting={setShowSetting} />

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
        >
        {showSetting && (<motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "0" }}
          exit={{ y: "100vh" }}
          transition={{duration: 0.7 }}>
          <Settings />
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

