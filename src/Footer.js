import React from 'react';

class Footer extends React.Component {
    constructor(propsYou){
        super(propsYou);
    }
    render (){
        return (
        <div className="FootFoot">
            <p>Footer Here</p>
            <p>Foot Foot Foot text to test if this text really shows up in the footer</p>
            <p>Testing for your Props</p>
        </div>
    );

}
}

export default Footer;