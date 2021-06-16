import React from 'react';
import { useParams } from 'react-router-dom';
import Reedus from '../images/download.jfif'
export default function Detail() {
    const state = [
        {
            id:1,
            name:"Norman Reedus",
            detail:`Norman Reedus is an American actor, filmmaker, photographer, writer and artist based in New York City. He provided the English voice, appearance, and motion capture for Sam in Death Stranding.
He is best known for portraying Daryl Dixon in the popular AMC horror drama The Walking Dead and Murphy MacManus in the films The Boondock Saints (1999) and The Boondock Saints II: All Saints Day (2009).`,
            image:Reedus,
        },
        {
            id: 2,
            name: "Léa Seydoux",
            detail: `Léa Seydoux is a French actress who provided the English voice, French voice, appearance, and motion capture for Fragile in Death Stranding.
She first came to attention after being nominated for the César Award for Most Promising Actress for her performance in The Beautiful Person (2008), and later again for her role in Belle Épine (2010), as well as the César Award for Best Actress for her role in Farewell My Queen (2012).

In 2013, she garnered widespread attention after being awarded the Palme d'Or at the Cannes Film Festival for her role in the critically acclaimed romance film Blue Is the Warmest Colour (2013), and later for her portrayal of Bond girl Madeleine Swann in Spectre (2015).`,
            image: "",
        },
        {
            id: 3,
            name: "",
            detail: "",
            image: "",
        },
    ]

    const params = useParams();
    const id = params.id
    return (
        <div className="detail">
            <div className="header">
            <h1>{state[id].name}</h1>
            <img src={Reedus} alt="" />
            <p className="detail-text">
                    {state[id].detail}
            </p>
            </div>
        </div>
    )
}
