import React from 'react';

const logoSection = <div class="logo">Logo Here</div>;
const menus = ["Home","About","Contact Us","Login"];
const mainMenu = menus.map((item) => <li>{item}</li>);

class Header extends React.Component {
    constructor(props){
        super(props);
    }

render (){
    return(
        <div class="header">
            {logoSection}
            <ul>
                {mainMenu}
            </ul>
            <div>{this.props.tXt}</div>
        </div>
    );

}
}

export default Header;