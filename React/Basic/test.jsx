import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6")
      .then((res) => res.json())
      .then((res) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);

  const setrandom = () => {
    const Rondom = [...data].sort(() => Math.random() - 0.5);
    setData(Rondom);
  };
  console.log(data)
  return (
    <main className="flex flex-col items-center gap-6 p-6 w-full bg-gray-100 min-h-screen">
      <button onClick={setrandom}></button>
      {data && data.map}
      <div className=""></div>
    </main>
  );
} 

export default App;
