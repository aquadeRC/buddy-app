import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import Root from 'views/Root';
//import {worker} from "mocks/browser";



async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }
    const { worker } = await import('mocks/browser')

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.

    worker.events.on('request:start', ({ request }) => {
        console.log('Outgoing:', request.method, request.url);
    });

    return worker.start()
}


enableMocking().then(() => {

    console.log('Mocking...');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
})

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
