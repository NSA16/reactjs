import React from 'react';

function Forms(){

    return(
        <div>
            <div>
                <label>First Name</label>
                <input type="text" name="first_name" className="inputFN"/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="last_name" className="inputLN"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    );

}

export default Forms;