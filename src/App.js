import React from 'react';
import './App.scss';
import RulesManagerApp from './components/RulesManagerApp';
import Loading from './components/Loading';

function App() {
  return (
    <React.Fragment>
      <Loading />
      <div className="content-container">
        <h1 className="title">Rules Manager</h1>
        <RulesManagerApp />
      </div>
    </React.Fragment>
  );
}

export default App;
