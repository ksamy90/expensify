import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Seattle</h1>
        <p>Right now at the: {props.info}</p>
        <p>{props.exp}</p>
    </div>
);

const Travel = (Washington) => (
    (props) => (
        <div>
            <Washington {...props} />
        </div>
    )
);

const MyExperience = Travel(Info);

ReactDOM.render(<MyExperience info="Space Needle" exp="really awesome" />, document.getElementById('app'));
