import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
    const onClick = () => {
        console.log("click")
    }

  return (
   <header className ='header'>
        <h1>{title}</h1>
        <Button color="green" text="add" onClick={onClick}></Button>
   </header>
  )
}

Header.defaultProps = {
    title: "Default title",
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header