import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div>
            Sorry, what you are looking for does not exist. Please go back to {" "} <Link to ='/'>Home Page</Link>
        </div>
    )
}

export default NotFound
