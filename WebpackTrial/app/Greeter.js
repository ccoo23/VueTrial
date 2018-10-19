import React from 'react';
import config from './config.json';
// const config = require('./config.json');

// module.exports = function() {
//   const greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };
const Greeter = () => (
  <div>
    {config.greetText}
  </div>
);

export default Greeter;
