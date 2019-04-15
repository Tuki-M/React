// To see the result of the code below, click on : https://jscomplete.com/playground/s258052

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props){
  
  return (
    <div>{props.message}</div>
  );
}

function App(){
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  
  return(
    <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App/>, 
  document.getElementById('mountNode'),
);
