import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function TopicHeads(props) {
    return(
        <>
         <h2 class="pb-1 border-bottom" style={{color:'black',textAlign:'left'}}>{props.text}</h2>
        </>
    );
};

export default TopicHeads;