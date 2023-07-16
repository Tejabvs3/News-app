import './App.css';
import React,{useState} from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App=()=>{
  //c = 'satish';
  const pageSize = 6;
  //const apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = '625fad74bd0c431f9912942931d01f26';

 const [progress, setProgress] = useState(10)



  
    return (
      
      <div>
        
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height = {4}
        progress={progress}
        />
        
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} key='general' apiKey = {apiKey} pageSize={pageSize} country='us' category='general' />}/>
            <Route path='/business' element={<News setProgress={setProgress} key='business' apiKey = {apiKey} pageSize={pageSize} country='us' category='business' />}/>
           {/* <Route path='/general' element={<News setProgress={setProgress} key='general' apiKey = {apiKey} pageSize={pageSize} country='us' category='general' />}/> */}
            <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' apiKey = {apiKey} pageSize={pageSize} country='us' category='entertainment' />}/>
            <Route path='/health' element={<News setProgress={setProgress} key='health' apiKey = {apiKey} pageSize={pageSize} country='us' category='health' />}/>
            <Route path='/science' element={<News setProgress={setProgress} key='science' apiKey = {apiKey} pageSize={pageSize} country='us' category='science' />}/>
            <Route path='/sports' element={<News setProgress={setProgress} key='sports' apiKey = {apiKey} pageSize={pageSize} country='us' category='sports' />}/>
            <Route path='/technology' element={<News setProgress={setProgress} key='technology' apiKey = {apiKey} pageSize={pageSize} country='us' category='technology' />}/>
          </Routes>
         
        </Router>
        
      </div>
    )
    }

export default App




