import { Inter } from "next/font/google";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { width, height } = useWindowSize();
  const [displayConfetti, setDisplayConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setDisplayConfetti(true);
  }, []);

  useEffect(() => {
    window.onbeforeunload = confirmExit;
    function confirmExit() {
      return "show warning";
    }
  }, []);

  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-center text-slate-700 ${inter.className}`}
    >
      {displayConfetti && isPlaying ? (
        <Confetti width={width} height={height} />
      ) : null}
      {isPlaying ? (
        <p className="text-5xl font-bold">Boldog Szülinapot!</p>
      ) : null}
      {!isPlaying ? (
        <button
          className="bg-emerald-500 px-3 py-2 rounded-lg font-bold text-white mt-4"
          onClick={(e) => {
            e.preventDefault();
            setIsPlaying(true);
          }}
        >
          Ártatlan Gomb
        </button>
      ) : null}
      <div className="hidden">
        {displayConfetti ? (
          <ReactPlayer
            loop
            playing={isPlaying}
            url="https://www.youtube.com/watch?v=wKSYlkQlfPo"
          />
        ) : null}
      </div>
    </main>
  );
}
