import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FirstLessonApp from './components/firstLessonApp';
import reportWebVitals from './reportWebVitals';
import ThirdLessonApp from './components/thirdLessonApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ul>
            <br />
            <li>
              <Link to='lesson1' target='_blank'>
                Core Concepts
              </Link>
            </li>
            <br />
            <li>
              <Link to='lesson3' target='_blank'>
                Components
              </Link>
            </li>
          </ul>}>
        </Route>
        <Route exact path='/lesson3' element={<ThirdLessonApp />}></Route>
        <Route exact path='/lesson1' element={<FirstLessonApp />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();