import React from 'react';
import List from './List';
import Form from './Form';

function App(props) {
  return (
    <div>
      <div>
        <h2>Add article</h2>
        <Form/>
      </div>
      <div>
        <h2>Atricle list</h2>
        <List/>
      </div>
    </div>
  );
}

export default App;