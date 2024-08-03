import { useState } from "react";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [error, setError] = useState("");

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  

  const handleTipClick = (percentage) => {
    setTipPercentage(percentage);
    setCustomTip(""); // Clear custom tip when a predefined button is clicked
    calculateAmounts(bill, percentage, people);
  };

  const handleCustomTipChange = (e) => {
    const customTipValue = e.target.value;
    setCustomTip(customTipValue);
    setTipPercentage(customTipValue); // Update the tip percentage with custom value
    calculateAmounts(bill, customTipValue, people);
  };

  const handlePeopleChange = (e) => {
    const value = e.target.value;
    setPeople(e.target.value);
    if (value <= 0) {
      setError("Input cannot be 0.");
    } else {
      setError("");
    }
    calculateAmounts(bill, tipPercentage, e.target.value);
  };

  const calculateAmounts = (bill, tipPercentage, people) => {
    const billAmount = parseFloat(bill);
    const numberOfPeople = parseInt(people);
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalTipPerPerson =
      numberOfPeople > 0 ? tipAmount / numberOfPeople : 0;
    const totalAmountPerPerson =
      numberOfPeople > 0 ? (billAmount + tipAmount) / numberOfPeople : 0;

    setTipAmount(totalTipPerPerson.toFixed(2));
    setTotalPerPerson(totalAmountPerPerson.toFixed(2));
  };

  const handleReset = () => {
    setBill("");
    setTipPercentage(0);
    setCustomTip("");
    setPeople(0);
    setTipAmount(0);
    setTotalPerPerson(0);
  };

  return (
    <main className="bg-Light-Grayish-Cyan lg:min-h-screen lg:flex flex-col items-center justify-center pt-10 space-mono-bold">
      <h1 className="tracking-widest  text-2xl font-bold mb-8 uppercase text-Dark-Grayish-Cyan text-center">
        spli<span className="block">tter</span>
      </h1>
      <div className="bg-white p-8 rounded-2xl max-w-md w-full mx-auto lg:max-w-[50rem] lg:grid lg:grid-cols-2 gap-8">
        <div className="">
          <div className="mb-4">
            <label className="block text-Dark-Grayish-Cyan text-sm font-bold mb-2">
              Bill
            </label>
            <input
              type="number"
              value={bill}
              onChange={handleBillChange}
              className="bg-Very-Light-Grayish-Cyan outline-none flex items-center border-none rounded w-full py-2 px-3 lg:text-2xl text-Very-Dark-Cyan leading-tight focus:outline-Strong-Cyan text-right"
              placeholder="0"
              style={{
                backgroundImage: `url(${dollar})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20px",
                backgroundPositionY: "10px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-Dark-Grayish-Cyan text-sm font-bold mb-2">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
              {[5, 10, 15, 25, 50].map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => handleTipClick(percentage)}
                  className={`${
                    tipPercentage === percentage && customTip === ""
                      ? "bg-Strong-Cyan text-Very-Dark-Cyan"
                      : "bg-Very-Dark-Cyan text-white"
                  } py-2 px-4 rounded-md text-lg focus:outline-none focus:shadow-outline hover:bg-Strong-Cyan-Hover hover:text-Very-Dark-Cyan`}
                >
                  {percentage}%
                </button>
              ))}
              <input
                type="number"
                value={customTip}
                onChange={handleCustomTipChange}
                className="text-right text-Dark-Grayish-Cyan bg-Very-Light-Grayish-Cyan placeholder:text-Dark-Grayish-Cyan placeholder:text-lg placeholder:text-center border-none rounded w-full py-2 px-3 leading-tight focus:outline focus:outline-Strong-Cyan"
                placeholder="Custom"
              />
            </div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between">
              <label className="block text-Dark-Grayish-Cyan text-sm font-bold mb-2">
                Number of People
              </label>
              {error && <p className="text-red-500">Can't be zero</p>}
            </div>
            <input
              type="number"
              value={people}
              onChange={handlePeopleChange}
              className={`bg-Very-Light-Grayish-Cyan outline-none flex items-center border ${error ? "border-red-500" : "border-none"} rounded w-full py-2 px-3 text-Very-Dark-Cyan leading-tight focus:outline-none text-right`}
              placeholder="1"
              style={{
                backgroundImage: `url(${person})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20px",
                backgroundPositionY: "10px",
                backgroundSize: "10px 15px",
                paddingLeft: "10px",
              }}
            />
          </div>
        </div>

        <div className="bg-Very-Dark-Cyan pt-10 pb-6 px-4 rounded-2xl flex flex-col gap-4 lg:gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-[.9rem] font-bold text-white">
              Tip Amount <span className="text-xs block text-Grayish-Cyan">/ person</span>{" "}
            </h2>
            <div className="text-Strong-Cyan text-2xl lg:text-4xl">${tipAmount}</div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[.9rem] font-bold text-white">
              Total <span className="text-xs block Grayish-Cyan">/ person</span>{" "}
            </h2>
            <div className="text-Strong-Cyan text-2xl lg:text-4xl">${totalPerPerson}</div>
          </div>
          <button
            onClick={handleReset}
            className="bg-Strong-Cyan hover:bg-Strong-Cyan-Hover mt-auto text-Very-Dark-Cyan py-2 px-4 rounded-md w-full focus:bg-Very-Dark-Cyan-Hover uppercase"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
