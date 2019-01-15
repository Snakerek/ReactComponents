import React from 'react';
//import ReactDOM from 'react-dom';

const CommentDetail = (props) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.autor}
				</a>
				<div className="metadata">
					<span className="date">{props.kiedySkomentowano}</span>
				</div>
				<div className="text">{props.textKomentarza}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
