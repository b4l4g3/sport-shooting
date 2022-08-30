import './App.css';
import { useState } from 'react'

function App() {
  const [scores, setScores] = useState([...Array(14)].map(() => 0));

  function getTotalScore() {
    return scores.reduce((acc, curr, currentIndex) => {
      return acc + (curr * currentIndex);
    }, 0);
  }

  function getTotalShots() {
    return scores.reduce((acc, curr, currentIndex) => {
      return acc + curr;
    }, 0);
  }

  return (
    <div className="App">
      <div className="Grid">
        {[...Array(14)].map((_, index) => {
          return (
            <div className="Item" key={index}>
              <div className="Counter">{scores[index]}</div>
              <button onClick={() => {
                if (getTotalShots() === 15) {
                  return;
                }

                setScores((prevState) => {
                  return prevState.map((item, prevStateIndex) => {
                    if (prevStateIndex === index) {
                      return item + 1;
                    }

                    return item;
                  })
                });
              }}>{index}</button>
            </div>
          );
        })}
      </div>
      <div className="Data">
        <div className="Total">
          Lövések:<br/>
          <span>{getTotalShots()}</span>
        </div>
        <div className="Total">
          Pontszám:<br/>
          <span>{getTotalScore()}</span>
        </div>
      </div>
      <div className="Reset">
        <button onClick={() => {
          setScores([...Array(14)].map(() => 0));
        }}>Nulláz</button>
      </div>
    </div>
  );
}

export default App;
