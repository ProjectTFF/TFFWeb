import React from 'react';
import NavMenu from '../Components/navMenu';
import Burger from '../Assets/menu.svg'

const Right = {
    display : "flex",
    padding : "0.5em",
    position : "absolute",
    right : "0",
}

function ShowHideNav() {
    const [show,setShow]=React.useState(false)
    return (
        <div className='ShowHideNav'>
            <button style={Right} onClick={()=>setShow(!show)}>
                <img src={Burger}/>
            </button>
            
            {
                show?<NavMenu />
                :null
            }
            
        </div>
    )
}

export default ShowHideNav;