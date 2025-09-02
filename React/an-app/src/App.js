import { useState } from 'react';



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


function Profile() {
  return (
    <>
      <h1> Welcome to the interactive portfolio of Mert Arar </h1>
      <img 
        className = "avatar"
        src={user.imageUrl}
        
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

export default function App() { // main component in the JS file
  const [page, setPage] = useState("home");
    
    return (
        <div>
           
            
            {page === "home" ? <Profile /> : <About />}
            
            {page === "home" 
            ? <AButton setPage={setPage} target= "about" label={"About"} />
            : <AButton setPage={setPage} target= "home" label={"Go Back"} />
}
            

        </div>
    );
}