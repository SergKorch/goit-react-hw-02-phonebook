import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// const inputElement = document.querySelector('input') 
// console.log(inputElement)
// const maskOptions = { 
//   mask: '+{3}(000)000-00-00' 
// }
// IMask(inputElement, maskOptions) 
// var phoneMask = IMask(
//   document.getElementById('phone-mask'), {
//     mask: '+{7}(000)000-00-00'
//   });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
