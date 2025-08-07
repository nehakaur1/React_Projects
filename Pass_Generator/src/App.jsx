import { useState, useCallback } from "react";
import "./PasswordGenerator.css"; // Basic styling (optional)
   // Here we Learned Usecallback
const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const [upp, setUpp] = useState(false);
  const [num, setNum] = useState(false);
  const [sym, setSym] = useState(false);


//with regular function
  // const generatePassword = () => {
  //   let charset = "abcdefghijklmnopqrstuvwxyz";
  //   if (upp) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   if (num) charset += "0123456789";
  //   if (sym) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  //   let newPassword = "";
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * charset.length);
  //     newPassword += charset[randomIndex];
  //   }

  //   setPassword(newPassword);
  // };

  //with callback function

const generatePassword = useCallback(() => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (upp) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) charset += "0123456789";
    if (sym) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  }, [length, upp,num ,sym]);

  //copy
  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);

    alert(" yahoo!!,Password copied to clipboard!");
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>

      <div className="password-display">
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Your password will appear here"
        />
        <button onClick={copyToClipboard} disabled={!password}>
          Copy
        </button>
      </div>

      <div className="controls">
        <div className="length-control">
          <label>Length: {length}</label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="option-controls">
          <label>
            <input
              type="checkbox"
              checked={upp}
              onChange={() => setUpp(!upp)} // Toggles just the 'upp' state
            />
            Uppercase Letters
          </label>

          <label>
            <input
              type="checkbox"
              checked={num}
              onChange={() => setNum(!num)}
            />
            Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={sym}
              onChange={() => setSym(!sym)}
            />
            Symbols
          </label>
        </div>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default App;
