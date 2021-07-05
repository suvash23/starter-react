import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    content="Nice Blog Post One!"
                    timeAgo="Today at 2:00PM"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="John"
                    content="Nice Blog Post Two!"
                    timeAgo="Today at 3:00PM"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Ricky"
                    content="Nice Blog Post Three!"
                    timeAgo="Today at 4:00PM"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Eady"
                    content="Nice Blog Post Four!"
                    timeAgo="Today at 5:00PM"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jeff"
                    content="Nice Blog Post Five!"
                    timeAgo="Today at 6:00PM"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));