import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  const onClick = () => {
    console.log("I've been clicked!");
  }
  return (
    <button
        onClick={onClick}
        style={{ backgroundColor: color }} className='btn'>{text}
    </button>
  )
}

Button.defaultProps = {
    color: 'black',
    text: 'untitled',
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button