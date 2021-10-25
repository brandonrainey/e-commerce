import { React, useState, useEffect, useRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeImg1 from "./homeImg1.png";
import HomeImg3 from "./homeImg3.png";
import Cpu1 from "./cpu1.png";
import { v4 as uuidv4 } from "uuid";

const imgData = [
  {
    img1: [HomeImg1, Cpu1, HomeImg3],
    title: ["Cards", "Cpus", "User Items"],
    author: "author",
    featured: true,
    cols: 2,
    id: 0,
  },
  {
    img1: [Cpu1, HomeImg3, HomeImg1],
    title: ["Cpus", "User Items", "Cards"],
    author: "author",
    featured: false,
    cols: 1,
    id: 1,
  },
  {
    img1: [HomeImg3, HomeImg1, Cpu1],
    title: ["User Items", "Cards", "Cpus"],
    author: "author",
    featured: false,
    cols: 1,
    id: 2,
  },
];

export default function HomePage() {
  const [imgNum, setImgNum] = useState(0);

  const fadeImg = useRef();

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  //  useEffect(() => {
  //    const interval = setInterval(() => {
  //     if (imgNum === 2) {
  //        setImgNum(0);
  //      } else if (imgNum === 0) {
  //        setImgNum(1);
  //      } else if (imgNum === 1) {
  //        setImgNum(2);
  //      }
  //    }, 8000);

  //    handleToggle();

  //   return () => clearInterval(interval);
  // }, [imgNum]);

  return (
    <div className="homeContainer">
      <GridList
        cellHeight={350}
        cols={2}
        style={{ width: 1200, height: 850, padding: 0}}
        spacing={75}
        className='gridList'
      >
        {imgData.map((item, index) => (
          <GridListTile key={item.id} cols={item.cols || 1} className='homeCard'>
            <img
              src={item.img1[imgNum]}
              alt={item.title}
              className={`imggg, ${isActive ? "fadeee" : "fadee"}`}
              ref={fadeImg}
              key={uuidv4()}
            />
            <GridListTileBar
              title={item.title[imgNum]}
              actionIcon={
                <IconButton>
                  <Link
                    to={() => {
                      if (item.img1[imgNum] === HomeImg1) {
                        return "/shop";
                      }
                      if (item.img1[imgNum] === Cpu1) {
                        return "/cpu";
                      } else if (item.img1[imgNum] === HomeImg3) {
                        return "/useritems";
                      }
                    }}
                    className="menuLinks"
                    style={{ zIndex: 200 }}
                  >
                    Shop
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
