import React, {useState} from 'react';
import '../../style.css';
import Fade from 'react-reveal';

export default function ButtonTabs() {
    const myToggleSession = sessionStorage.getItem('myToggleTab');
    const [toggleState, setToggleState] = useState(myToggleSession);
    const myNewsSession = sessionStorage.getItem('newsSession');
    
    const tabMenu = [
        ["Hardware",      "Mental",   "ID",  "Film",     "Politic",    "Astronom",  "Athletic"],
        ["Software",      "Virus",    "US",  "Music",    "Law",        "Biologi",    "Mind"],
        ["PlayStation",   "Vitamin",  "AU",  "Humour",   "Social",     "Physic",     "Air"],
        ["Robot",         "Blood",    "FR",  "Dance",    "History",    "Experiment", "Cycling"],
        ["Apple",         "Immune",   "JP",  "Book",     "Universal",  "Cell",       "Football"],
        ["Microsoft",     "Cancer",   "RU",  "Club",     "Office",     "Plant",      "Basket"],
        ["Google",        "Oral",      "GR", "Fun",      "People",     "Human",      "Golf"],
        ["PlayStation",   "Ear",      "SA",  "Media",    "Opinion",    "Animal",     "Tennis"]
    ]

    function toggleTab(event,index) {
      sessionStorage.setItem('mySubTab', event.target.innerHTML.toLowerCase());
      sessionStorage.setItem('myToggleTab', index);
      setToggleState(index);
      
      return event.target.innerHTML.toLowerCase();
    };
    

    return (
      <Fade left>
        <div className="d-flex justify-content-center mt-1">
          <div className="bloc-tabs">
            {tabMenu.map((e,i) => 
              myNewsSession === "technology" || myNewsSession === null 
              ? 
              <a
              key={i}
              href={`/technology/${e[0].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[0]}
              </a>
              :
              myNewsSession === "health"
              ?
              <a
              key={i}
              href={`/health/${e[1].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[1]}
              </a>
              :
              myNewsSession === "business"
              ?
              <a
              key={i}
              href={`/business/${e[2].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[2]}{console.log(toggleState)}
              </a>
              :
              myNewsSession === "entertainment"
              ?
              <a
              key={i}
              href={`/entertainment/${e[3].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[3]}
              </a>
              :
              myNewsSession === "general"
              ?
              <a
              key={i}
              href={`/general/${e[4].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[4]}
              </a>
              :
              myNewsSession === "science"
              ?
              <a
              key={i}
              href={`/science/${e[5].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[5]}
              </a>
              :
              myNewsSession === "sports"
              ?
              <a
              key={i}
              href={`/sport/${e[6].toLowerCase()}`}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={(event) => toggleTab(event,i)}
              >
                {e[6]}
              </a>
              :
              console.log("Something wrong!!")
            )}
          </div>
        </div>
      </Fade>
    )
}
