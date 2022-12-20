import { render } from '@testing-library/react';
import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';


const defaultConfig = {
  theme: "dark",
  lang: "es",
};

export default function Settings() {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);
  const [dark, setDark] = React.useState(config.theme === 'dark')

  /**
   * Documentar useEffect.
   * Se utilizo este hook para cambiar el nombre de la clase de App
   */

  React.useEffect(() => {
    document.getElementById("App").className = dark ? "App dark" : 'App'
  }, [dark])

  /**
   * Función para intercambiar light <-> dark tanto en localStorage como en estado de la aplicación
   * @param {*} event - Evento de click proveniente de React
   */


  const toggleMode = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: oldConfig.theme === "light" ? "dark" : "light",
    }));
    setDark(!dark)
  };

  return (
    <div className="text-right">
      <hr className="my-4" />
      <h1 className="text-3xl text-cyan-800 font-semibold mb-4 dark:text-cyan-400">APP SETTINGS</h1>
      <p className="text-sm">Actual Config: <span className="italic">{config.theme}</span></p>
      <button className="btn mt-4" type="button" onClick={toggleMode}>
        Toggle DarkMode
      </button>
    </div>
  );
}