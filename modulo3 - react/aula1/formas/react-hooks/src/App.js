import React, { useEffect } from "react";
import { getNewTime } from "./helpers/formatDateHelpers";

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  useEffect(() => {
    document.title = clickArray.length;
  });

  const getNewMoment = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTime);
    setClickArray(newClickArray);
  };

  return (
    <div>
      <h1>React com Hooks</h1>
      <button onClick={getNewTime}>Adicionar Horário</button>

      <ul>
        {clickArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
