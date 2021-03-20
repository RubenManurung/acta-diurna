import React, {useContext} from 'react';
import { NewsSubTabsMenu} from '../../news/NewsSubTabsMenu';
import { BounceLoader } from 'react-spinners';
import ArticleSubMenu from './ArticleSubMenu';
import ButtonTabs from './ButtonTabs';

function SubMenu(props) {
    const { data } = useContext(NewsSubTabsMenu);
    let mySubTab = sessionStorage.getItem('mySubTab');

    
    return (
        <>
            <ButtonTabs />
            <div className="container-fluid" style={{display: mySubTab ? "" : "none"}}>
                <h3 className="d-flex justify-content-center p-2">{mySubTab ? mySubTab.charAt(0).toUpperCase() + mySubTab.slice(1) : "Technology"}</h3>
                <div className="d-flex justify-content-center">
                    <div className="wrapper">
                        {data ? data.articles.map(news => <ArticleSubMenu data={news} key={news.url} toggle={props.toggle} subTabMenu={mySubTab}/>)
                        :
                        <div className="row d-flex justify-content-center" style={{marginLeft: "10rem"}}>
                            <BounceLoader loading/>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubMenu;
