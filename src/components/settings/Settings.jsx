import React from 'react';
import useLocalStorege from '../../hooks/useLocalStorege';

const defaultConfig = {
  theme: 'dark',
  lang: 'es',
};

export default function Settings() {
  const [config, setConfig] = useLocalStorege({ key: 'config', defaultValue: defaultConfig });

  const handleClick = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => (
      {
      ...oldConfig,
      theme: 'ligth',
      }));
  };

  return (
    <div>
      <h1>APP SETTINGS</h1>
      <p>
        Actual Config:
        {config}
      </p>
      <button type="button" onClick={handleClick}>
        SaveNew Settings
      </button>
    </div>
  );
}
