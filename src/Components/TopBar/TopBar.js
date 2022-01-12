import './topbar.css';
import { MdViewModule } from 'react-icons/md';

function TopBar() {
     return (
          <div className='topBar'>
               <div className='topBar_menu'>
                    <MdViewModule fill='white' size={30} />
               </div>
          </div>
     );
}

export default TopBar;
