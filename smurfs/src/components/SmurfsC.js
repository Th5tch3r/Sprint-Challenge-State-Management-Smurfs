import React from 'react';
import { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfsC = () => {
    const { smurf } = useContext(SmurfContext);

    return (
        <div>
            <h1>Smurfs</h1>
            {smurf.map (smurf => (
                <div> 
                    <h2>{smurf.name}</h2>
                    <h2>{smurf.age}</h2>
                    <h2>{smurf.height}</h2>
                </div>
            ))}
        </div>
    )
}

export default SmurfsC; 