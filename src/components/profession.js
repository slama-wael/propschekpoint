import React from 'react'
import PropTypes from "prop-types";

const profession = ({prof})=> {
    return(
        <div >
            <h3> {prof} </h3>
        </div>
    )
}

profession.defaultProps = {
    prof: "chef d'entreprise 'slama traveaux' opperant dans le domaine d'entretien & maintenance industrielle"
   
};

profession.propTypes = {
    prof: PropTypes.string,
    
};

export default profession;
