import React, { useState } from "react";
import Banner from "./Banner";

export default function InputField() {
  const [number, setNumber] = useState('');

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNumber(e.target.value)}
      />

      <Banner number={number} />
    </div>
  );
}
