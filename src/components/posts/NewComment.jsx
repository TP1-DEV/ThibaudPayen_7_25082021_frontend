import React from 'react'

const NewComment = (props) => {
   const {isOpen} = props

    return (
        <div className={isOpen ? null : 'hidden'}>
            <p>ceci est un test</p>
        </div>
    )
}

export default NewComment