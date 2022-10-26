import React from 'react';

class User extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            backgroundColor: "green"
        }
    }

render () {
    return (
        <div className="testUser" index={this.props.index}>
            {this.props.index}
        </div>
    );
}
}

export default User;