import React from 'react'
import PropTypes from "prop-types";


const bio = ({biblio})=> {
return(
    <div >
        <h3> {biblio} </h3>
    </div>
)
}

bio.defaultProps = {
    biblio: "Ingénieur en Génie électrique Informatique industriel avec une experience de 2 ans dans le domaine travaux électrique & électricité de bâtiments et 3 ans dans le domaine d'entretien & maintenance industrielle ",
   
};

bio.propTypes = {
    biblio: PropTypes.string,
    
};

export default bio;
