import React, { Component } from 'react';
import Button from './components/Button/Button';
import Layout from './components/Layout/Layout';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
