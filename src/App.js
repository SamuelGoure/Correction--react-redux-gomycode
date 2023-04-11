import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import changeName from "./redux/actions/changeName";

function App() {
  const nom = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const [typingName, setTypingName] = useState("");

  function handleChangeName(event) {
    setTypingName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(changeName(typingName));
  }

  return (
    <div className="App">
      <div className="myInput">
        <p>{typingName}</p>
        <input
          type="text"
          placeholder="Entrer un texte svp"
          onChange={handleChangeName}
        />
        <input type="submit" onClick={handleSubmit} />
      </div>
      <div className="tBody">Mon nom est : {nom} </div>
    </div>
  );
}

export default App;
