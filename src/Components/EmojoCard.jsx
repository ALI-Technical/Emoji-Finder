import React, { useState } from "react";
import "./emojiCard.css";
import data from "../Data/data.json";

const EmojoCard = () => {
  const [searchVal, setSearchval] = useState("");

  const handleSearch = (e) => {
    setSearchval(e.target.value.toLowerCase())
  }

  const handleCopy = (symbol) => {
    navigator.clipboard.writeText(symbol);
  }

  return (
    <section className="mainBox">
      <div className="innerBox">
        <div className="searchBox">
          <input
            onChange={(e) => handleSearch(e)}
            value={searchVal}
            type="search"
            placeholder="Emoji Name"
          />
        </div>
        <div className="emojisBox grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 max-[488px]:grid-cols-1">
          {data.map((item, ind) => {
            let keywords = item.keywords.trim().split(" ");
            // console.log(keywords);

            if (searchVal !== "") {
              if (keywords.includes(searchVal)) {
                return (
                  <div key={ind} onClick={() => handleCopy(item.symbol)} className="symbolBox">
                    <h1>{item.symbol}</h1>
                    <h3>{item.title}</h3>
                  </div>
                );
              }
            }
            else {
              return (
                <div key={ind} onClick={() => handleCopy(item.symbol)} className="symbolBox">
                  <h1>{item.symbol}</h1>
                  <h3>{item.title}</h3>
                </div>
              );
            }
          })}
        </div>
        <div className="developerBox flex justify-center items-center mt-3">
          <marquee>
            <h3 className="text-2xl font-mono font-semibold uppercase">Developer:
              <a href="https://github.com/ALI-Technical" target={"_blank"}>
                ALI <i class="fa-solid fa-arrow-up-right-from-square text-lg"></i>
              </a>
            </h3>
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default EmojoCard;
