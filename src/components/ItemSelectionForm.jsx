import PropTypes from 'prop-types'
import { itemPluralName, itemPrice, currency, shippingCost } from '../Constants'
import { React, useState } from 'react';


const ItemSelectionForm = ({ itemAmount, onSelectItem }) => {
    let [scopedTotalCost, updateScopedTotalCost] = useState(12)
    let onSelectChange = (e) => {
        onSelectItem(e.target.value)
        updateScopedTotalCost(e.target.value * itemPrice)
    };
    let dropdownOptions = itemAmount.map((item) => <option value={item} key={item}>{item}</option>);



    return (
        <div>
            
            <div>
            <select onChange={onSelectChange}>
                {dropdownOptions}
            </select> {itemPluralName} - {currency} {scopedTotalCost}
            </div>
            <div>
                Flat shipping - {currency} {shippingCost}
            </div>
            <div>
                Total - {currency} {scopedTotalCost + shippingCost}
            </div>
        </div>
    );
}

// Property types
ItemSelectionForm.propTypes = {
    itemAmount: PropTypes.array.isRequired
}

export default ItemSelectionForm;