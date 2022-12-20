import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: '$da7f15', backgroundColor: 'black'
// }

export default Header