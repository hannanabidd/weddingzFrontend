import React from "react";


function LgHeadings(props){
    return(
        <h2 className="lg-headings">
            {props.heading_name}<span className="bubble-span">.</span>
        </h2>
    )
}

export default LgHeadings;