import React from 'react';
import config from './config.json';
import styles from './Greeter.css';//导入
// const config = require('./config.json');

// module.exports = function() {
//   const greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };
const Greeter = () => (
  <div className={styles.root}>
    {config.greetText}
  </div>
);

export default Greeter;
