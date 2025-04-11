import React from "react";

function Card({profile}){


    return(
        <div>
            <img src={profile.avatar_url} alt={profile.login}></img>
            <h2>{profile.login}</h2>
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer"> View Profile</a>
           

        </div>
    );
}

export default Card;