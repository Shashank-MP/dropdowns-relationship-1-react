import * as React from "react";
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'


const App = () => {
/** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
const [selected, setSelected] = React.useState("");
// console.log([selected, setSelected])
/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
};

/** Different arrays for different dropdowns */
const C_PROGRAM = [
	"MODULE 1 C_PROGRAM",
	"MODULE 2 C_PROGRAM",
	"MODULE 3 C_PROGRAM",
];
const PYTHON = ["MODULE 1 PYTHON",
 "MODULE 2 PYTHON", "MODULE 3 PUTHON","MODULE 4 PYTHON"];
const JAVA = ["MODULE 1 JAVA", "MODULE 2 JAVA", "MODULE 3 JAVA", "MODULE 4 JAVA"];

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
if (selected === "C PROGRAM") {
	type = C_PROGRAM;
} else if (selected === "PYTHON") {
	type = PYTHON;
} else if (selected === "JAVA") {
	type = JAVA;
}

/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((el) => <option key={el}>{el}</option>);
}
return (
	<div
	style={{
		padding: "16px",
		margin: "16px",
	}}
	>
	<form>
		<div>
		{/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
  
		<select onChange={changeSelectOptionHandler}>
			<option>Projects...</option>
			<option>C PROGRAM</option>
			<option>PYTHON</option>
			<option>JAVA</option>
		</select>
		</div>
    <Header as='h6'  textAlign='left'>
    MODULE
    </Header>
		<div>
		<select>
			{
        
			/** This is where we have used our options variable */
			options
			}
		</select>
		</div>
	</form>
	</div>
);
};

export default App;
