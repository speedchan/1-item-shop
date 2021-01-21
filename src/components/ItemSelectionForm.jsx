import PropTypes from 'prop-types'
import { itemPluralName } from '../Constants'


const ItemSelectionForm = ({ itemAmount, onSelectItem }) => {
    // Methods
    let onSelectChange = (e) => {
        console.log(e.target.value);
        onSelectItem(e.target.value)
    };

    // HTML
    let dropdownOptions = itemAmount.map((item) => <option value={item} key={item}>{item}</option>);

    return (
        <form action="">
            <label htmlFor=""></label>
            <select onChange={onSelectChange}>
                {dropdownOptions}
            </select> {itemPluralName}
        </form>
    );
}

// Property types
ItemSelectionForm.propTypes = {
    itemAmount: PropTypes.array.isRequired
}

export default ItemSelectionForm;