import "./App.css";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import podcastcover from "./images/podcastcover.png";
import uncheckedBox from "./images/checkbox--unchecked.svg";
import checkedBox from "./images/checkbox--checked.svg";
function App() {
  const [podcastItem, setPodcastItem] = useState([
    {
      key: "1",
      text: "Trailer",
      box: uncheckedBox,
      style: "PodcastListItemUnchecked",
    },
    {
      key: "2",
      text: "James Q Quick Origin Story",
      box: uncheckedBox,
      style: "PodcastListItemUnchecked",
    },
    {
      key: "3",
      text: "Amy Dutton's Origin Story",
      box: uncheckedBox,
      style: "PodcastListItemUnchecked",
    },
    {
      key: "4",
      text: "Tech Behind the Podcast",
      box: uncheckedBox,
      style: "PodcastListItemUnchecked",
    },
    {
      key: "5",
      text: "Tech Behind SelfTeach.me",
      box: uncheckedBox,
      style: "PodcastListItemUnchecked",
    },
    {
      key: "6",
      text: "Freelancing (Part 1)",
      box: uncheckedBox,
      style: "PodcastListItemUnchecked",
    },
  ]);
  const handleClick = (index) => () => {
    let newPodcastItem = [...podcastItem];
    if (newPodcastItem[index].box === uncheckedBox) {
      newPodcastItem[index].box = checkedBox;
      newPodcastItem[index].style = "PodcastListItemChecked";
    }
    setPodcastItem(newPodcastItem);
  };
  const handleUnClick = (index) => () => {
    let newPodcastItem = [...podcastItem];
    if (newPodcastItem[index].box === checkedBox) {
      newPodcastItem[index].box = uncheckedBox;
      newPodcastItem[index].style = "PodcastListItemUnchecked";
    }
    setPodcastItem(newPodcastItem);
  };
  return (
    <main className="App">
      <section className="CardContainer">
        <aside className="PodcastImage">
          <img src={podcastcover} className="PodcastImageImg" alt="Cover"></img>
        </aside>
        <aside className="PodcastList">
          <h1 className="PodcastListTitle">
            LISTEN TO ALL THE COMPRESSED.FM EPISODES
          </h1>
          {podcastItem.map((item, index) => {
            return (
              <ul key={item.key} className={item.style}>
                <img
                  src={item.box}
                  onClick={handleUnClick(index)}
                  className="PodcastListItemCheckbox"
                  alt="Checkbox"
                ></img>
                <p onClick={handleClick(index)} className="PodcastListItemText">
                  {item.key} || {item.text}
                </p>
              </ul>
            );
          })}
        </aside>
      </section>
    </main>
  );
}

export default App;
