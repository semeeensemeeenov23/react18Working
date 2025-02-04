import React from "react";

import PostListItem from '../post-list-item/post-list-item'

const Postlist = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
                {/* <PostListItem 
                label={item.label}
                important={item.important} /> */}
            </li>
        )
    })

    return (
        <ul className="app-lis list-group">
            {elements}
        </ul>
    )
}

export default Postlist;