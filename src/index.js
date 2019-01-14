import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="#" className="avatar">
					<img alt="avatar" />
				</a>
				<div className="content">
					<a href="#" className="author">
						Kacper
					</a>
					<div className="metadata">
						<span className="date">Dzisiaj o 6:00</span>
					</div>
					<div className="text">Jakiś przykładowy wpis.</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
