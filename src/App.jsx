import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let audio = new Audio("/public/HappyBirthdayEnglish 2.mp3");

  const playAudio = () => {
    audio.play();
  };

  const vid1 = "https://www.youtube.com/watch?v=lhhKC1aZ3nY";
  const vid2 = "https://www.youtube.com/watch?v=5ar42kauTd8";
  const vid3 = "https://www.youtube.com/watch?v=A5cV_ejIUrA";
  const vid4 = "https://www.youtube.com/watch?v=Cs5vUfddkT8";
  const vid5 = "https://www.youtube.com/watch?v=4sZmPHJPvZE";
  const vid6 = "https://www.youtube.com/watch?v=i08zmKjKBP4";

  return (
    <main>
      <h1 className="text-3xl text-[#00ffff]">
        Happy birthday to you Luisita! 🎈🥧🥧🥧🍰🍰🎂🎂🎂🍪{" "}
      </h1>
      <br></br>
      <h2 className="text-2xl text-[#00ffff] bg-black w-96">
        {" "}
        Luisita: Feliz Cumpleaños, Dios te conceda un día de amor, de
        bendiciones, de sorpresas y de los milagros esperados, te quiero mucho,
        te abrazo desde el corazón, Hoy elevo una oración especial por el nuevo
        año que inicias y agradecimiento por el que finaliza. Feliz, feliz, muy
        muy feliz cumpleaños! Con cariño, Olga{" "}
      </h2>
      <br></br>
      <section className="grid grid-cols-[50%,50%] gap-[20px]">
        <a href={vid1} target="_blank">
          <img className="" src="/public/cats.png" />
        </a>
        <a href={vid2} target="_blank">
          <img className="" src="/public/IMG_0095.JPG"></img>
        </a>
      </section>
      <br></br>
      <section className="grid grid-cols-[50%,50%] gap-[20px]">
        <a href={vid3} target="_blank">
          <img className="" src="/public/IMG_0956.JPG"></img>
        </a>
        <a href={vid4} target="_blank">
          <img className="" src="/public/IMG_1128.JPG"></img>
        </a>
      </section>
      <br></br>
      <section className="grid grid-cols-[50%,50%] gap-[20px]">
        <a href={vid5} target="_blank">
          <img className="" src="/public/IMG_6409.png"></img>
        </a>
        <a href={vid6} target="_blank">
          <img className="" src="/public/IMG_8614.png"></img>
        </a>
      </section>

      <br></br>
      <br></br>
      <h2 className="text-2xl text-[#00ffff]">
        We hope you have lots of celebration and rejoice!
      </h2>
      <br></br>
      <br></br>
      <button
        className="text-3xl rounded-xl bg-[#00ffff] h-20"
        onClick={playAudio}
      >
        {" "}
        Play me!{" "}
      </button>
    </main>
  );
}

export default App;
