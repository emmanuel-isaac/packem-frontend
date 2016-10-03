/**
*
* Intro
*
*/

import React from 'react';
import Button from 'react-bootstrap/lib/Button';


import styles from './styles.css';

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={`container ${styles.introMessage}`}>
        <h1 className="display-1">Welcome to packem.com</h1>
        <p className="lead">Find the right gift for the right occasion.</p>
        <p className="m-b-0">Select from our numerous hampers or Create your own.</p>
        <p>Quality just got more attractive.</p>
        <p>
          <Button
            bsSize="large"
            className={styles.packemButton}
          >
            Start Shopping Now
          </Button>
        </p>
      </div>
    </section>
  );
}

export default Intro;
