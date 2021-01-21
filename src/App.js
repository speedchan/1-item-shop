import './App.css';
import ItemSelectionForm from './components/ItemSelectionForm';
import PaymentForm from './components/PaymentForm';
import Carousel from './components/Carousel';
import { React, useState } from 'react';
import { itemAmount, itemPrice } from './Constants';

const App = () => {
  let [totalCost, updateTotalCost] = useState(12)

  // Methods
  let calculateTotalCost = (e) => {
    let calculatedCost = e * itemPrice;
    updateTotalCost(calculatedCost);
  };
  

  return (
    <div className="App">
      <Carousel />
      <ItemSelectionForm itemAmount={itemAmount} onSelectItem={calculateTotalCost}/>
      <PaymentForm totalAmountDue={totalCost}/>
    </div>
  );
}

export default App;
