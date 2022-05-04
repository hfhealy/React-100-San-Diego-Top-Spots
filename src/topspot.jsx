
import React from 'react';

export default props => (

    <div className='well text-center'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
            <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} className="btn btn-primary btn-lg" type="button" name="button" target='_blank'>Location</a> 
    </div>
);