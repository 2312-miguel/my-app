import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Reloj  from './components/Reloj';
import myComponect  from './components/Reloj';
import Ap3 from './components/Accesorios';
import Clock from './components/Estados';
import CiclosDeVida from './components/CliclosDeVida';
import Styles from './components/Styles';
import './assets/css/Styles.css';
import Eventos from './components/Eventos';
import Event2 from './components/Event2';
import Event3 from './components/Event3';
import Event4 from './components/Event4';
import Event5 from './components/Event5';
import EventSonFather from './components/EventSonFather';
import Jsx from './components/Jsx';
import RenderCond from './components/RenderCond';
import MFR from './components/MFR';
import Form from './components/Form';
import Form2 from './components/Form2';
import UncontrolledInput from './components/UncontrolledInput';
import ControllerInput from './components/ControllerInput';
import CompInput from './components/CompInput';
import LStado from './components/LStado';

const frutas = [
{fruta : "grapefruit"},
{fruta : "lime"},
{fruta : "coconut"},
{fruta : "mango"}
];
const animals = [
  { id: 1, especie: 'gato' },
  { id: 2, especie: 'perro' },
  { id: 3, especie: 'humano' },
  { id: 4, especie: 'gato2' }
];
 ReactDOM.render(
   <React.StrictMode>
      {console.clear()}
    {/* <App />
     <Ap3 />
     <Clock name = 'Hola Mundo'/>
     <CiclosDeVida /> 
     <Eventos/>
     <Event2/>
     <Event3/>
     <Event4 img= 'favicon.ico'/>
     <Event5 img= 'favicon.ico'>
       <Event4 img='favicon.ico' />
      </Event5>
     <Event5 img= ''>
       <p>Imagen2</p>
     </Event5>
     <EventSonFather/>
     <Jsx />
     <RenderCond animals={animals}/>
     <MFR animals = { animals }/>
     <Form frutas={frutas}/>
     <Form2 />
     <UncontrolledInput />
     <ControllerInput />
     <CompInput />*/}
     <LStado/>
     
  </React.StrictMode>,document.getElementById('root')
);
  
/* const interval = () => {
    ReactDOM.render(
      <Reloj />
      , document.getElementById('container')
  );
}
setInterval(interval, 1000); */

/* function intervale() {

  const element = (
    <div className='box-reloj'>
      <h1> {new Date().toLocaleTimeString()}</h1>
    </div>
  );

  ReactDOM.render(
    element, document.getElementById('root')
  );
} */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
