import React from "react";
import Card from './card.js';

const profiles=[
    {
        id:1,
        login:'octocat',
        avatar_url:'https://avatars.githubusercontent.com/u/583231?v=4',
        html_url:'https://github.com/octocat'
    },
    {
        id:2,
        login:'mojombo',
        avatar_url:'https://avatars.githubusercontent.com/u/?v=4',
        html_url:'https://github.com/mojombo'
    }
];

function CardList({profiles}){

    return(
        <div className="card-list">
            {profiles.map((profile)=>(
                <Card key ={profile.id} profile={profile}/>
            ))}

        </div>
    );
}

export default CardList;