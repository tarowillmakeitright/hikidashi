import React from  "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Booklist from "./Booklist";
import Booklistnakata from "./Booklistnakata";
import Blog from "./Blog";
import Izaka from "./Izaka";
import News from "./News";
import { NewsContextProvider } from "./NewsContext";
 
 

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/books">
            <Header />
            <Booklist />
          </Route>
          <Route path="/nakata">
            <Header />
            <Booklistnakata />
          </Route>
          <Route exact path="/izaka">
            <Header />
            <Izaka />
          </Route>
          <Route exact path="/blog">
            <Header />
            <Blog />
          </Route>
          <Route exact path="/news">
            <Header />
            <NewsContextProvider>
              <News />
            </NewsContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <script
//     type="text/javascript"> trends.embed.renderWidget("dailytrends", "", {"geo": "JP", "guestPath": "https://trends.google.com:443/trends/embed/"});</script>

// <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderWidget("dailytrends", "", {"geo":"JP","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>

// ネットフリックス{/* <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"ネットフリックス","geo":"JP","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9&geo=JP&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> */}

// 株式会社　{/* <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"株式会社","geo":"JP","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE&geo=JP&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> */}