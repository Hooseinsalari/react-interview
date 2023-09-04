import React, { useEffect, useState } from "react";

import axios from "axios";

// interfaces
import { Data } from "../models";

// react router dom
import { Link } from "react-router-dom";

const Movies: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/movies");
      setData(data.data);
    };

    fetchData();
  }, []);

  if (!data.length) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {data.length ? (
        <div>
          {data.map((i) => (
            <div key={i.id}>
              <h2>{i.title}</h2>
              <h2>{i.director}</h2>
              <h2>{i.year}</h2>
              <ul>
                {i?.genre?.map((n, index) => (
                  <li key={index}>{n.name}</li>
                ))}
              </ul>
              <div
                style={{
                  width: "100px",
                  height: "15px",
                  background: "gray",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: `${i.rating * 10}%`,
                    background: "blue",
                    height: "15px",
                    zIndex: "1000",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                  }}
                ></div>
              </div>
              <Link to={`/${i.id}`}>{i.id}</Link>
              <hr />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Movies;
