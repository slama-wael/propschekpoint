import React from 'react';
import bio from '../components/bio.js';
import profession from '../components/profession.js';
import fullname from '../components/fullname.js';



const profile = ()=> {
    const name = "slama";
    const lastName = "wael";
    const bibliogrph = "Ingénieur en Génie électrique";
    const prof = "chef d'entreprise" ;
    return(
        <div >
          <fullname nom= {name} prenom= {lastName}/>
          <bio biblio = {bibliogrph} />
          <profession prof = {prof} />

        </div>
    )
}

export default profile;

