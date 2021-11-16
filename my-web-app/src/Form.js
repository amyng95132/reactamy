import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Form() {
  const COLORS = ['white', 'red', 'blue', 'black', 'cream'];
  const [values, setValues] = useState("");

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };

  const handleClick = () => {
      alert("Great!");
  }

  return (
     <form>
      <h2>Register Your Cat</h2>
      <div><label>Name*:</label></div>
      <input type="text" required value={values.name} onChange={set('name')}/>
      <div>{values.name}</div>

      <div><label>Color*:</label></div>
      <select>
        <option value="">Select color</option>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select>

      <div><label>Age*:</label></div>
      <input type="number" required min="1"/>

      <div><label>Habits:</label></div>
      <textarea />
      
      <button onClick={handleClick}>Take the shot!</button>
     
    </form>
  );
    
}
export default Form
