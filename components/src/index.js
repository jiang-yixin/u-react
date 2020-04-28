import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from  './ApprovalCard';

const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    time="Today at 4:00PM"
                    text="hello"
                />
            </ApprovalCard>


            <CommentDetail
                avatar={faker.image.avatar()}
                author="Kym"
                time="Today at 5:00PM"
                text="Salut"
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));