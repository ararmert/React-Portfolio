import { useState } from 'react';
import React from 'react';
import './App.css';

const user = {
  name: 'Mert Arar',
  imageUrl: 'https://i.imgur.com/6yHc5fX.jpeg',
  imagesize: 300,

};

function AButton({ setPage, target, label }) {
  function click() {
    const key = `clicked:${target}`; // unique per target
    if (!localStorage.getItem(key)) {
      alert(`See, I know how to make a button :)`);
      localStorage.setItem(key, '1');
    }
    setPage(target);
  }
  return <button onClick={click}>{label}</button>;
}

function BButton({ setPage, target, label }) {
   
    function click() {
    const key = `clicked:${target}`; // unique per target
    if (!localStorage.getItem(key)) {
      alert(`See, I know how to make 2 buttons :)`);
      localStorage.setItem(key, '1');
    }
    setPage(target);
  }
  return <button onClick={click}>{label}</button>;
}

function CButton({ setPage, target, label }) {
   
    function click() {
    setPage(target);
  }
  return <button onClick={click}>{label}</button>;
}

function Profile() {
  return (
    <>
      <h1> Welcome to the interactive portfolio of 
        Mert Arar </h1>
      <img 
        className = "avatar"
        src={user.imageUrl}
        alt= ''
        align= "center"
        style={{
          width: user.imagesize,
          height: user.imagesize
        }}
        />
        </>
  );
}

function About() {
  return (
    <>
      <h1>Technical Skills</h1>
      <h2>Programming languages</h2>
      <ul>
        <li><a href="https://github.com/ararmert/sysprak">C</a></li>
        <li>Java</li>
        <li><a href="https://github.com/imanigma/TradeRepublic_CDTMHacks25">Python</a></li>
        <li>Haskell</li>
        <li>Currently learning JavaScript and <a href="https://github.com/ararmert/React-Portfolio">React</a>, which powers this website.</li>
      </ul>
    </>
  );
}

function UpComing() {
  const upcomingfeatures = [
    { title: 'Tic-Tac-Toe', isNext: true, id: 1},
    { title: 'Pong', isNext: false, id: 2},
    { title: 'Proper Changelog/Commit list', isNext: false, id: 5},
    { title: '... and more!                                                                                                                                                                                                                                                ', isNext:false, id: 6},
  ];

  const done = [
    { title: 'Click counter to only display the annoying message on the first click', isNext: false, id: 4},
  ];

  const listFeatures = upcomingfeatures.map(feature =>
  <li 
      key={feature.id}
      style={{
        color: feature.isNext ? 'orange' : 'darkred'
      }}>
    {feature.title}
  </li>
  );

  const doneFeatures = done.map(feature =>
  <li 
      key={feature.id}
      style={{
        color: 'green'
      }}>
    {feature.title}
  </li>
  );
  return ( // In React, a components return must have one root element. But often you dont actually want to wrap things in an extra <div>. That would clutter your DOM with unnecessary <div>s.
  
    <div 
       style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
       }}>
      <h1 style={{ color: 'black' }}>Upcoming Features</h1>
      <ul>{listFeatures}</ul>
      <h1 style={{ color: 'black' }}>Implemented Features</h1>
      <ul>{doneFeatures}</ul>
      
    
    </div>
  
  );
}

export default function App() { // main component in the JS file
  
  const [page, setPage] = useState("home");
  
  const views = {
    home: <Profile />,
    about: <About />,
    upcoming: <UpComing />
  };
    
    return (
    <div className="entrance-animation"
       style={page === "upcoming" && page === "about" // TODO: fix animations for the other 2 pages
         ? {
             position: 'absolute',
             left: '50%',
             top: '50%',
             transform: 'translate(-50%, -50%)',
           }
         : {
             position: 'absolute',
             left: '50%',
             top: '50%',
             transform: 'translate(-50%, -50%)',
           }
       }>
            {views[page]}
            
            {page === "home" ? ( // if on home, run the first block, show 2 buttons
              <>
              <br />
              <AButton setPage={setPage} target="about"    label="About Me"/>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <BButton setPage={setPage} target="upcoming" label="Upcoming Features"/>   
              </>
            ) : ( // if not on home, only 1 button to go back home
               <>
               <br />
               &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <CButton setPage={setPage} target="home" label="Go Back"/>
              </>
            )}
          </div>
    );
}

