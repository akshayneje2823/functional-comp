import React from 'react';
import Componenet4 from './Componenet4';

function Component3({User}) {
  return (
    <div>
      <h1>Component 3</h1>
      <Componenet4 user={User}/>
    </div>
  )
}

export default Component3