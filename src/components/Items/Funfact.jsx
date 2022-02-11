import React from "react";
import CountUp from "react-countup";

function Funfact({ funfact: { title, count, icon = null }, isVisible }) {
  const winWidth = window.innerWidth;
  const countQuery = () => {
    if (winWidth && winWidth > 767) {
      return <CountUp end={isVisible ? count : 0} />;
    }
    return <CountUp end={count} />;
  };
  return (
    <div className="fact-item text-center">
      {icon ? <i className={`${icon} icon-circle`}></i> : null}
      <h2 className="count">{countQuery()}</h2>
      <span>{title}</span>
    </div>
  );
}

export default Funfact;
