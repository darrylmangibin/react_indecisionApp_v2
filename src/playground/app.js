class Visibility extends React.Component {
	constructor(props){
		super(props)
		this.handleToggle = this.handleToggle.bind(this);
		this.state = {
			visible: false
		}
	}
	handleToggle(){
		this.setState((prevState) => {
			return {
				visible: !prevState.visible
			}
		})
		
	}
	render() {
		return (
			<div>
				<h1>Visibility</h1>
				<button onClick={this.handleToggle}>
					{this.state.visible ? 'Hide' : 'Show'}
				</button>
				<div>
					{
						this.state.visible && <p>This is the hidden text</p>
					}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Visibility />, document.querySelector('#app'))