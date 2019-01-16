class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleAMinusOne = this.handleAMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		}
	}
	handleAddOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count + 1 
			}
		});
	}
	handleAMinusOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}
	handleReset(){
		this.setState((prevState) => {
			return {
				count: prevState.count = 0
			}
		})
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleAMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		)
	}
}

ReactDOM.render(<Counter />, document.querySelector('#app'))