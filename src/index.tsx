import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  }
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
