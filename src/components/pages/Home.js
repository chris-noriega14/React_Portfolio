import React from 'react';
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <div>
      <h2>Christopher Noriega: Full-Stack Web Developer</h2>
      <Parallax bgImage="https://github.com/chris-noriega14/Updated_Portfolio/blob/main/Assets/images/GitHub_Photo.jpg?raw=true" strength={500}>
      <div style={{ height: 550 }}>
      {/* <img class="backimage w-25 rounded mx-auto d-block rounded float-left" src="https://github.com/chris-noriega14/Updated_Portfolio/blob/main/Assets/images/GitHub_Photo.jpg?raw=true" alt="Web Developer"></img> */}
      </div>
    </Parallax>     
    </div>
  );
}
