import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const bmi = weight / ((height / 100) * (height / 100));

  return (
    <>
      <h1>Project 7 - BMI Calculator</h1>
      <div className="slider-container">
        <Slider text={'Weight (kg)'} value={weight} setValue={setWeight} />
        <br></br>
        <Slider text={'Height (cm)'} value={height} setValue={setHeight} />
      </div>{' '}
      <h2>Your BMI is {bmi.toFixed(1)}</h2>
    </>
  );
}

function Slider({ text, value, setValue }) {
  return (
    <>
      <label className="slider">
        {text}: <strong>{value}</strong>
      </label>
      <input
        type="range"
        min={40}
        max={200}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
