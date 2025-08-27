import { ClockFading } from "lucide-react";
7;
import {timeSinceConsumption,getCaffeineAmount,calculateCurrentCaffeineLevel } from "../utils/index.js";
import { Coffee } from "lucide-react";
import { useAuth } from "../Context/AuthContext.jsx";

function History() {

  const {globalData} = useAuth();

  return (
    <div>
      <div className="section-header">
        <ClockFading size={30} />
        <h2 style={{ marginBottom: "22px" }}>History</h2>
      </div>
      <div className="separate">
        <p>
          {" "}
          <i> Hover for more information! </i>{" "}
        </p>
        <div className="coffee-history">
          {Object.keys(globalData)
            .sort((a, b) => b - a)
            .map((utcTime, idx) => {
              const coffee = globalData[utcTime];
              const timeSinceComsume = timeSinceConsumption(utcTime);
              const originalAmount = getCaffeineAmount(coffee.name);
              const remainingAmount = calculateCurrentCaffeineLevel({
                  utcTime : coffee
              })
              const summary = `${coffee.name} | ${timeSinceComsume} | €${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`;
              return (
                <div key={idx} title={summary}>
                  <Coffee />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default History;
