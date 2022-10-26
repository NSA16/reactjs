import React from 'react';
import User from './User';

class Board extends React.Component {
    constructor(props){
        super(props)
    }

    sQuare(index) {
        return<User index={index}/>
    }


render (){
    return (
        <div>
            <div>
                {this.sQuare(1)}
                {this.sQuare(2)}
                {this.sQuare(3)}
            </div>
            <div>
                {this.sQuare(4)}
                {this.sQuare(5)}
                {this.sQuare(6)}
            </div>
            <div>
                {this.sQuare(7)}
                {this.sQuare(8)}
                {this.sQuare(9)}
            </div>
        </div>
    )
}
}

export default Board;