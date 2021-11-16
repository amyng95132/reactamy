import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FormDataComponent from './components/form-data-component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FormDataComponent />
      </div>
    );
  }
}

export default App;