
const app = {
	title:'Indecision App',
	subtitle: 'Put you life in the hands of a computer',
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;

	if(option){
		app.options.push(option);

	}
	e.target.elements.option.value = '';
	render();
	console.log(app.options)
}

const removeAll = () => {
	app.options = [];
	render();
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option)
}

const appRoot = document.querySelector('#app');

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are yout options' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What Shout I do?</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>{
				app.options.map((option) => <li key={option}>{option}</li>)
			}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div> 
	);

	ReactDOM.render(template, appRoot);
}
// ReactDOM.render(template, appRoot);
render();

console.log('asd')
