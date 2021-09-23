import React from 'react';
import './App.scss';
import Container from './Container';
import styles from './App.module.scss'

function App() {
  return (
    <div id="custom-react-uploader" className={styles.container}>
        <Container />
    </div>
  );
}

export default App;
