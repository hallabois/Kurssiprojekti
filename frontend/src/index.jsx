import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css';

// webpack hard-codes process.env.BACKEND_PORT in the build
const BACKEND_PORT = process.env.BACKEND_PORT;
const baseUrl = window.location.hostname;
const backendUrl = `http://${baseUrl}:${BACKEND_PORT}`;

// Asynchronous function for getting data from the backend /api/greeting endpoint
const getGreetingFromBackend = async () => {
  try {
    const url = `${backendUrl}/api/greeting`;
    console.log(`Getting greeting from ${url}`);
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  return { greeting: 'Could not get greeting from backend' };
};

const BackendGreeting = (props) => (
  <div>
    <p>
      Backend says:
      {' '}
      {props.greeting}
    </p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
    };
  }

  async componentDidMount() {
    const response = await getGreetingFromBackend();
    this.setState({ greeting: response.greeting });
  }

  render() {
    return (
      <BackendGreeting greeting={this.state.greeting} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
