 const Reloj = () => {

     const element = (
         <div className='box-reloj'>
             <h1> {new Date().toLocaleTimeString()}</h1>
         </div>
     );
 
     return element;

}

export default Reloj ;
