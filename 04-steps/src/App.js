import { useState } from "react";
// TUTORIAL
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep((v) => {
      if (v === 1) return 1;
      return v - 1;
    });
  }
  function handleNext() {
    setStep((v) => {
      if (v === 3) return 3;
      return v + 1;
    });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((v) => !v)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#7950F2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950F2" textColor="#fff" onClick={handleNext}>
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

// PRACTICE

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   function handleReset() {
//     setCount(0);
//     setStep(1);
//   }

//   return (
//     <div>
//       <div>
//         <input
//           type="range"
//           min={0}
//           max={10}
//           value={step}
//           onChange={(e) => setStep(Number(e.target.value))}
//         />
//         <span>Step: {step}</span>
//       </div>

//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <input
//           type="text"
//           value={count}
//           onChange={(e) => setCount(Number(e.target.value))}
//         />
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is"
//             : count > 0
//             ? `${count} days from today is`
//             : `${Math.abs(count)} days ago was`}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>

//       {count !== 0 ||
//         (step !== 1 && (
//           <div>
//             <button onClick={handleReset}>Reset</button>
//           </div>
//         ))}
//     </div>
//   );
// }
