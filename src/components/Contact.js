import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
    setTimeout(function(){
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus ratione error pariatur in est dolorum corporis? Ex sapiente deserunt reiciendis. Incidunt id optio omnis fuga, ut officiis alias corrupti.</p>
        </div>
    )
}
export default Rainbow(Contact);