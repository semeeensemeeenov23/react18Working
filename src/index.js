import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const elem = (
  <div>
    
    
  </div>
)

const Header = () => {
  return <h2>Hello Word</h2>
}

const Field = () => {
  const styleField = {
    width: '300px'
  }

  return <input 
            style={styleField}
            tupe="text" 
            placeholder="Type here" 
            autoComplete=''
            className='first'/>
}

const Btn = () => {
  const text = "Log in";
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     {<App/>} {/* Тут мы рендерим содержимое переменной elem */}
   </React.StrictMode>
 );

reportWebVitals();
