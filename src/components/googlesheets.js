import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function GoogleSheets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1RxH5BLpesXy4UvpBzrmBGTELZleh442NrywgJVpCnqw",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
    {data.map((item, i) => (
        <Fragment key={i}>
        <p>USERNAME - {item.username}</p>
        <p>FOLLOWER - {item.followers}</p>
        <p>ENGAGEMENT RATE - {item.engagement}</p>
        <p>POST VALUE - {item.pv}</p>
        <br />
        </Fragment>
    ))}
    </>
  );
}