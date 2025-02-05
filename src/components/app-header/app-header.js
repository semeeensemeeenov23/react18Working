import React from "react";

const AppHeader = ({liked, allPost}) => {
    return (
        <div className="app-header d-flex">
            <h1>Klements</h1>
            <h2>{allPost} Записей, понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader