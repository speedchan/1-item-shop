import Button from './Button';
import PropTypes from 'prop-types'


const Form = ({dropdownValues}) => {
    const onClick = (e) => {
        e.preventDefault();
        console.log("Click!")
    }
    const dropdownOptions = dropdownValues.map((obj) => <option value={obj.cost}>{obj.amount}</option>);

    return (
        <form action="">
            <label htmlFor=""></label>
            <select>
                {dropdownOptions}
            </select>
            <Button name='Submit' onClick={onClick} />
        </form>
    );
}


Form.propTypes = {
    dropdownValues: PropTypes.array.isRequired
}

export default Form;