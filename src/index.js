import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker/locale/pl';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				autor="Wójek Sam"
				kiedySkomentowano="Dzisiaj o 6:00"
				textKomentarza={Faker.lorem.sentence()}
				avatar={Faker.image.avatar()}
			/>
			<CommentDetail
				autor={Faker.name.firstName()}
				kiedySkomentowano="Dzisiaj o 11:00"
				textKomentarza={Faker.lorem.sentence()}
				avatar={Faker.image.avatar()}
			/>
			<CommentDetail
				autor={Faker.name.firstName()}
				kiedySkomentowano="Wczoraj o 14:00"
				textKomentarza={Faker.lorem.sentence()}
				avatar={Faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
