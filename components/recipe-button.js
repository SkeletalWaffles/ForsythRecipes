import React from 'react'
import { useRouter } from 'next/router'

const RecipeBtn = (props) => {
    const router = useRouter()

    return (
        <div className='recipe-btn'>
            <button onClick={() => {
                router.push('/recipes/[rtitle]', `/recipes/${props.name}`)
            }}>{props.name}</button>
        </div>
    )
}

export default RecipeBtn