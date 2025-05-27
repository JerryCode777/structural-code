import { CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

const ToggleButton = ({toggleMenu, isOpen}) => {
  return (
    <button onClick={toggleMenu} className='focus:outline-none'>
        {isOpen ? (<IoMdClose className="text-2xl" />):(<CgMenuRight className="text-2xl" />)}
    </button>
  )
}

export default ToggleButton