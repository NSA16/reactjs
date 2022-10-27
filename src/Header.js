import React from 'react';

const logoSection = <div class="logo">Logo Here</div>;
const menus = ["Home","About","Contact Us","Login"];
const mainMenu = menus.map((item) => <li>{item}</li>);

class Header extends React.Component {
    constructor(propsNiDarna){
        super(propsNiDarna);
    }

render (){
    return(
        <div class="header">
            {logoSection}
            <ul>
                {mainMenu}
            </ul>
            <p>Testing Props Ni Darna</p>
        </div>
    );

}
}

export default Header;