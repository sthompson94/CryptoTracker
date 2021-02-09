import React from 'react'

function Button(props){
    return(
        <div>
            <a class="btn btn-default" href={props.link} role="button">{props.text}</a>
        </div>
    )
}


export default Button;