import React from 'react'
import {Link} from "react-router-dom"

function notfound() {
    return (
        <div>
            Sorry what you are looking for does not exist, plese go back to the {" "} <Link to ='/'>Home Page</Link>
        </div>
    )
}

export default notfound
