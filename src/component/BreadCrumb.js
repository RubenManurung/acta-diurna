import React, {useEffect} from 'react'

export default function BreadCrumb({category}) {
    const myNewsSession = sessionStorage.getItem('newsSession');
    const mySubTab = sessionStorage.getItem("mySubTab");

    useEffect(() => {
        document.title = "News " + category;
    })


    return (
        <nav aria-label="breadcrumb" className="navbar justify-content-left container-fluid">
            <ol className="breadcrumb">
                <li className={myNewsSession ? "breadcrumb-item active" : ""}><a href="/">Home </a>{category ? "/ "+category : ""}</li>
                <li className={myNewsSession ? "breadcrumb-item active" : ""}><a href={myNewsSession}>{myNewsSession ? myNewsSession : ""}</a></li>
                <li className={mySubTab ? "breadcrumb-item active" : ""} aria-current="page">&nbsp;{mySubTab ? mySubTab : "  "}</li>
            </ol>
        </nav>
    )
}
