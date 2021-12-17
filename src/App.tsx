import React, { useState } from 'react';
import './App.css';

import { computeTip, computeTotal } from './utils';

function App() {

  const [bill, setBill] = useState('42.00');
  const [peopleNb, setPeopleNb] = useState('3');
  const [tipRate, setTipRate] = useState(15);

  const [tip, setTip] = useState(computeTip(bill, tipRate));
  const [totalPerPax, setTotalPerPax] = useState(computeTotal(bill, tipRate, peopleNb));

  const calculate = () => {
    setTip(computeTip(bill, tipRate));
    setTotalPerPax(computeTotal(bill, tipRate, peopleNb))
  }

  return (
    <div className="wrapper">
    <div className="tip-amount">
        <div className="label">Tip Amount</div>
        <div className="dollars"><sup>$</sup><span id="tip-amount">{tip.toFixed(2)}</span></div>
    </div>
    <div className="total-per-person">
        <div className="label">Total Per Person</div>
        <div className="dollars"><sup>$</sup><span id="total-per-person">{totalPerPax.toFixed(2)}</span></div>
    </div>

    <div className="input-fields">
        <div className="bill-amount">
            <div className="field">
                <input type="text" id="bill-amount" name="bill-amount" value={bill} onChange={(e) => setBill(e.target.value)} />
            </div>
            <div className="label">Bill Amount</div>
        </div>
        <div className="number-of-people">
            <div className="field">
                <input type="text" id="number-of-people" name="number-of-people" value={peopleNb} onChange={(e) => setPeopleNb(e.target.value)}  />
            </div>
            <div className="label">Number of People</div>
        </div>
    </div>

    <div className="tip-percentages">
        <div>
            <input type="radio" name="tip" value="5" id="five-percent" checked={tipRate === 5} onChange={(e) => setTipRate(Number(e.target.value))} />
            <label htmlFor="five-percent">
                5%
            </label>
        </div>
        <div>
            <input type="radio" name="tip" value="10" id="ten-percent" checked={tipRate === 10} onChange={(e) => setTipRate(Number(e.target.value))} />
            <label htmlFor="ten-percent">
                10%
            </label>
        </div>
        <div>
            <input type="radio" name="tip" value="15" id="fifteen-percent" checked={tipRate === 15} onChange={(e) => setTipRate(Number(e.target.value))}/>
            <label htmlFor="fifteen-percent">
                15%
            </label>
        </div>
        <div>
            <input type="radio" name="tip" value="20" id="twenty-percent" checked={tipRate === 20} onChange={(e) => setTipRate(Number(e.target.value))}/>
            <label htmlFor="twenty-percent">
                20%
            </label>
        </div>
    </div>
    <div className="button-wrapper">
        <button id="calculate" onClick={() => calculate()}>Calculate</button>
    </div>
</div>
  );
}

export default App;
