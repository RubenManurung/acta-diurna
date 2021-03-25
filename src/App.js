import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { NewsContextProvider } from './news/NewsContext';
import News from './component/News';
import { NewsSubTabsMenuProvider } from './news/NewsSubTabsMenu';
import SubMenu from './component/tabsNewsCat/SubMenu';
import NewsCategory from './component/NewsCategory';



function App(){
  const mySessData = sessionStorage.getItem('newsSession');
  const mySubTab = sessionStorage.getItem('mySubTab');

  
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/category" >
            <NewsCategory />
          </Route>
          <Route exact render={() => 
            <Redirect 
              to={{
                pathname: `/${mySessData 
                ?
                mySessData 
                :
                ""}${mySubTab 
                ?
                mySessData
                ? 
                '/'+mySubTab 
                : 
                mySubTab : ""}` 
                }} 
                />}>
            <NewsSubTabsMenuProvider>
              <SubMenu />
            </NewsSubTabsMenuProvider>

            <NewsContextProvider>
              <News />
            </NewsContextProvider>
          </Route>
        </Switch>
      <Footer />
    </Router>
  )
};

export default App;
