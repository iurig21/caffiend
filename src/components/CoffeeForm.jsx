import { Pencil } from "lucide-react";
import { coffeeOptions } from "../utils/index.js";
import { useState } from "react";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useAuth } from "../Context/AuthContext.jsx";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

function CoffeForm({ isAuthenticated }) {
  const [showModal, setShowModal] = useState(false);
  const [showCoffeeList, setShowCoffeeList] = useState(false);
  const [selectedCoffee, setselectedCoffee] = useState(null);
  const [CoffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);

  const { globalData, setGlobalData, GlobalUser } = useAuth();

  async function HandleSubmitForm() {
    if (!isAuthenticated) {
      return setShowModal(true);
    }

    if (!selectedCoffee) {
      return;
    }
    try {
      const newGlobalData = { ...(globalData || {}) };

      const nowTime = Date.now();

      const timeToSubtract = hour * 60 * 60 * 1000 + min * 60 * 100;

      const timestamp = nowTime - timeToSubtract;

      const newData = {
        name: selectedCoffee,
        cost: CoffeeCost,
      };

      newGlobalData[timestamp] = newData;

      setGlobalData(newGlobalData);

      const userRef = doc(db, "users", GlobalUser.uid);

      const res = await setDoc(
        userRef,
        {
          [timestamp]: newData,
        },
        { merge: true }
      );

      setselectedCoffee(null);
      setCoffeeCost(0);
      setHour(0);
      setMin(0);
      setShowCoffeeList(false);

    } catch (err){
      console.log(err.message);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      <div className="section-header">
        <Pencil />
        <h2 className="center">Start tracking today</h2>
      </div>
      <div className="select-coffe">
        <h4>Select coffee type</h4>
        <div className="coffee-grid">
          {coffeeOptions.slice(0, 5).map((option, idx) => (
            <button
              onClick={() => {
                setselectedCoffee(option.name);
                setShowCoffeeList(false);
              }}
              className={`button-card ${
                selectedCoffee === option.name && "coffee-button-selected"
              }`}
              key={idx}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          ))}
          <button
            className={`button-card ${
              showCoffeeList && "coffee-button-selected"
            }`}
            onClick={() => {
              setShowCoffeeList(true);
              setselectedCoffee(null);
            }}
          >
            <h4>Other</h4>
          </button>
        </div>
        {showCoffeeList && (
          <select
            onChange={(event) => setselectedCoffee(event.target.value)}
            name="coffee-list"
            id="coffee-list"
          >
            <option value={null}>Select type</option>
            {coffeeOptions.map((option, idx) => (
              <option key={idx} value={option.name}>
                {" "}
                {option.name} ({option.caffeine}mg){" "}
              </option>
            ))}
          </select>
        )}
        <h4>Add the cost (€)</h4>
        <input
          type="number"
          name=""
          id=""
          className="w-full"
          value={CoffeeCost}
          onChange={(event) => setCoffeeCost(event.target.value)}
        />
        <h4>Time since consumption</h4>
        <div className="time-entry">
          <div>
            <h6>Hours</h6>
            <select
              onChange={(event) => setHour(event.target.value)}
              value={hour}
              name=""
              id="hours-select"
            >
              {[
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23,
              ].map((hour, idx) => (
                <option key={idx} value={hour}>
                  {" "}
                  {hour}{" "}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h6>Minutes</h6>
            <select
              onChange={(event) => setMin(event.target.value)}
              value={min}
              name=""
              id="mins-select"
            >
              {[0, 5, 10, 15, 30, 45].map((min, idx) => (
                <option key={idx} value={min}>
                  {" "}
                  {min}{" "}
                </option>
              ))}
            </select>
          </div>
          <button onClick={HandleSubmitForm}>
            <p>Add entry</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeForm;
