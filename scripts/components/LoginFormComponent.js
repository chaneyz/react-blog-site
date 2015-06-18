var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			

			<form>
				<input type='text' ref='username' placeholder='Username' /><br/>
				<input type='text' ref='password' placeholder='Password' /><br/>
				<button type='submit'>Login</button>
			</form>
		)
	}
})