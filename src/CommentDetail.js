import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker/locale/pl';

const CommentDetail = () => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={Faker.image.avatar()} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{Faker.name.firstName()}
				</a>
				<div className="metadata">
					<span className="date">Dzisiaj o 6:00</span>
				</div>
				<div className="text">Jakiś przykładowy wpis.</div>
			</div>
		</div>
	);
};

export default CommentDetail;
