import React from 'react'
import PropTypes from "prop-types";
/*import photo from "./photo.jpg";*/


const fullname = ({nom, prenom, children}) => {
    const handlName = () => {
        alert ("bonjour je suis" /*${nom}  ${prenom }*/)
    }
    const restyle = {
        color : "red" ,
    
    }
    
    return (
        <div >
            <img  src = "./photo.jpg" alt="tof"/>{children}
            <button onClick={handlName}>appuyer ici</button>
            <p style = {restyle }>
                nom: {nom}
                prenom: {prenom}
            </p>
        </div>
    )
}
fullname.defaultProps = {
    nom: "Slama",
    prenom: "Wael",
};

fullname.propTypes = {
    nom: PropTypes.string,
    prenom: PropTypes.string,
};

export default fullname;
