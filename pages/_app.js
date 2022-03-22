import '../styles/globals.css';
// the only place you can import global style sheets is in _app.js

function MyApp({ Component, pageProps }) {
  // if you wanted to add a nav bar it could go here
  return <Component {...pageProps} />;
}

export default MyApp;
