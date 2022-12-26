import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        < Button color='green' text='Button 1' />
        < Button color='red' text='Button 2' />
        < Button color='blue' text='Button 3' />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: '$da7f15', backgroundColor: 'black'
// }

export default Header