import React from 'react';
import '../Css/tag.css'

const Tag = (props) => {
    return (
        <>
            <div className='tag-block'>
                <span className='tag-block-span'>
                    #{props.str}
                </span>
            </div>
        </>
    )

}

export default Tag;