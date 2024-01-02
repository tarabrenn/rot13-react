import { useState } from "react";

export function Rot() {
  // logic here
  const [userChar, setUserChar] = useState(""); // setting state

  // 97 to 122 lower case
  const rotString = (s) => {
    // converting one char function
    let rotStr = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] == " ") {
        rotStr += " ";
        continue;
      }
      if (s.charCodeAt(i) + 13 >= 122) {
        rotStr += String.fromCharCode(97 + (s.charCodeAt(i) + 13 - 123));
      } else {
        rotStr += String.fromCharCode(s.charCodeAt(i) + 13);
      }
    }
    return rotStr;
  };

  return (
    <>
      <input
        value={userChar}
        onChange={(e) => setUserChar(e.target.value)}
      ></input>
      <p>{rotString(userChar.replace(/[^A-Za-z0-9 ]/g, ""))}</p>
    </>
  );
}
