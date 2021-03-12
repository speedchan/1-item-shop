import '../styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemSelectionForm from './ItemSelectionForm';
import PaymentForm from './PaymentForm';
import Carousel from './Carousel';
import { React, useState } from 'react';
import { itemAmount, itemPrice } from '../Constants';
import Title from './Title';
import Failure from './Failure';
import Success from './Success';

const App = () => {
  let [totalCost, updateTotalCost] = useState(12)

  // Methods
  let calculateTotalCost = (e) => {
    let calculatedCost = e * itemPrice;
    updateTotalCost(calculatedCost);
  };


  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Switch>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/failure'>
            <Failure />
          </Route>
          <Route path='/'>
            <Carousel />
            <ItemSelectionForm itemAmount={itemAmount} onSelectItem={calculateTotalCost} />
            <PaymentForm totalAmountDue={totalCost} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
