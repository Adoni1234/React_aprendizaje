import React, { useState } from 'react';
import Hijo from './Hijo';

function Padre() {
   const [data, setData] = useState('');

   const seteo = () => {
    setData("Bienvenido a hijo");
  }

   return (
    <React.Fragment>
      <button primary="true" onClick={() => seteo()}>Clic Padre</button> 
      <Hijo datos={data} />
    </React.Fragment>
  );
}

export default Padre;
