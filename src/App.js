
import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {

	let [value, setvalue] = useState("")
	let [val, setval] = useState("")
	let [sign, setsign] = useState("")
	let [s_val, sets_val] = useState("")

	const getdata = (x) => {
		setvalue(value + x);
	}
	const caldata = (m) => {
		setval(value)
		setvalue("")
		setsign(m)
	}
	const handleEquals = () => {
		// sets_val(value)
		const s_val = value;
		switch (sign) {
			case 1:
				setvalue((parseFloat(val) + parseFloat(s_val)));
				break;
			case 2:
				setvalue((parseFloat(val) - parseFloat(s_val)));
				break;
			case 3:
				setvalue((parseFloat(val) * parseFloat(s_val)));
				break;
			case 4:
				if(parseFloat(s_val)===0)
				{
					setvalue("cannot divide by zero");
				}else{
					setvalue((parseFloat(val) / parseFloat(s_val)));
				}
				break;
			case 5:
				if(parseFloat(s_val)===0)
				{
					setvalue("cannot divide by zero");
				}else{
					setvalue((parseFloat(val) % parseFloat(s_val)));
				}
				
				break;
			default:
				setvalue("Error");
		}
	}
	const handleClear = () =>{
		setvalue("")
	}
	const singledel = () =>{
		setvalue((prevvalue)=>prevvalue.slice(0,-1));
	}

	return (
		<div className="App">

			<div class="main_div">
				<div class="text">
					<input type="text" name="" value={value} ></input>
				</div>
				<div class="six">
					<input type="button" name="" value={"MC"}></input>
					<input type="button" name="" value={"MR"}></input>
					<input type="button" name="" value={"M+"}></input>
					<input type="button" name="" value={"M-"}></input>
					<input type="button" name="" value={"MS"}></input>
					<input type="button" name="" value={"M"}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"Del"} onClick={() => singledel()}></input>
					<input type="button" name="" value={"CE"} onClick={() => handleClear()}></input>
					<input type="button" name="" value={"C"} onClick={() => handleClear()}></input>
					<input type="button" name="" value={"/"} onClick={() => caldata(4)}></input>
				</div>
				<div class="btn">
				
				</div>
				<div class="btn">
					<input type="button" name="" value={"7"} onClick={() => getdata(7)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"8"} onClick={() => getdata(8)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"9"} onClick={() => getdata(9)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"*"} onClick={() => caldata(3)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"4"} onClick={() => getdata(4)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"5"} onClick={() => getdata(5)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"6"} onClick={() => getdata(6)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"-"} onClick={() => caldata(2)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"1"} onClick={() => getdata(1)} style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"2"} onClick={() => getdata(2)} style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"3"} onClick={() => getdata(3)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"+"} onClick={() => caldata(1)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"0"} style={{backgroundColor:"#5C5B57"}} onClick={()=>getdata(0)}></input>
					<input type="button" name="" value={"."}style={{backgroundColor:"#5C5B57"}} onClick={() => getdata(".")} ></input>
					<input type="button" name="" value={"="} onClick={() => handleEquals()} style={{backgroundColor:"#91908C"}}></input>
					<input type="button" name="" value={"%"} onClick={() => caldata(5)} ></input>
				</div>
			</div>

		</div>
	);
}

export default App;
