import { useState } from 'react';
import React from 'react';


const user = {
  name: 'Mert Arar',
  imageUrl: 'https://i.imgur.com/6yHc5fX.jpeg',
  imagesize: 300,

};


function AButton({ setPage, target, label}) {
    function click() {
      alert('See, I know how to make buttons :)')
      setPage(target);
      
    }

    return (
        <button onClick={click}>
          {label}
        </button>
    );
}


function BButton({ setPage, target, label}) {
    function click() {
      alert('See, I know how to make buttons :)')
      setPage(target);
      
    }

    return (
        <button onClick={click}>
          {label}
        </button>
    );
}





function Profile() {
  return (
    <>
      <h1> Welcome to the interactive portfolio of Mert Arar </h1>
      <img 
        className = "avatar"
        src={user.imageUrl}
        alt= ''
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
        <li>Currently learning JavaScript and <a href="https://github.com/ararmert/React-Portfolio">React</a></li>
      </ul>
    
    
    </>
  );
}


function UpComing() {
  const upcomingfeatures = [
    { title: 'Tic-Tac-Toe', isNext: true, id: 1},
    { title: 'Pong', isNext: false, id: 2},
    { title: '... and more!', isNext:false, id: 3},
  ];

    const listFeatures = upcomingfeatures.map(feature =>
    <li 
        key={feature.id}
        style={{
          color: feature.isNext ? 'yellow' : 'darkred'
        }}>
      {feature.title}
    </li>
  );
  return ( // In React, a components return must have one root element. But often you dont actually want to wrap things in an extra <div>. That would clutter your DOM with unnecessary <div>s.
     <>   
    <div style ={{
      backgroundColor: 'black', 
      width: '100px', 
      height: '100px'
      }}/>

    <h1>Upcoming Features:</h1>
    <ul>{listFeatures}</ul>
    </>
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
        <div>
            {views[page]}
            
            {page === "home" ? ( // if on home, run the first block, show 2 buttons
              <>
              <AButton setPage={setPage} target="about"    label="About" />
              <BButton setPage={setPage} target="upcoming" label="Upcoming Features" />   

              </>
            ) : ( // if not on home, only 1 button to go back home
              <AButton setPage={setPage} target="home" label="Go Back" />

            )}
            
          

        </div>
    );
}