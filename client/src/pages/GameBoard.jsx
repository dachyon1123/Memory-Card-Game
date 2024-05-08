import { useEffect, useState } from "react";

export default function GameBoard() {
  const [cardUrls, setCardUrls] = useState([]);
  const [clickedArray, setClickedArray] = useState([])
  const [clickedTwice, setClickedTwice] = setState(false)

  useEffect(() => {
    Promise.all(
      Array.from({ length: 16 }, (_, i) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
          .then(response => response.json())
          .then((data) => {
            setCardUrls((previous) => [...previous, data])
          })
      })
    )
  }, []);

  function handleClick(id) {
    
  }

  return (
    <div className="flex flex-col">
      <nav className="flex justify-between">
        <div className="flex flex-col gap-14">
          <h1 className="text-3xl mt-4 ml-8">Pokemon Memory Game</h1>
          <p className="ml-8">
            Get points by clicking on images. Don't click on the same image
            twice, or your score will reset
          </p>
        </div>
        <div className="flex flex-col mr-20 mt-4">
          <p>Score: </p>
          <p>High Score: </p>
        </div>
      </nav>
      <main className="flex justify-center mt-20">
        <div className="grid grid-cols-8 gap-10">
        {cardUrls.slice(0, 16).map((cardUrl) => {
            return (
              <div className=" flex justify-center items-center border border-4 border-black rounded-xl h-[300px] w-[200px] bg-green-300">
                <img src={cardUrl.sprites.front_default} alt="" className="scale-150 border rounded-xl border-black bg-white"/>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}
