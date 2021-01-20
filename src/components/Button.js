import PropTypes from 'prop-types'

function Button({ name, path = '/', onClick }) {
  return (
    <a href={path}>
      <button onClick={onClick}>
        {name}
      </button>
    </a>
  );
}

// Defining variable type
Button.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
