import React from 'react';
import { Background } from './views/Background.js';
import { CreateBook } from './views/CreateBook.js';
import { UserName } from './views/UserName.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi hello world!</h1>
        <UserName />
        <Background />
        <CreateBook />

      </div>
    );
  }
}


export default App;
