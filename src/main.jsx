import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Courses from './routes/courses';
import Course from './routes/course';
import Players from './routes/players';
import Home from './routes/home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<App />}>
        
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />}>
            <Route path=":courseName" element={<Course />} />
          </Route>
          <Route path="players" element={<Players />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        
      </Route>
    </Routes>

  </BrowserRouter>,
  rootElement
);
