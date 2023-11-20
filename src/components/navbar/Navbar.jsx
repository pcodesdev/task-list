import { motion } from 'framer-motion';
import useSound from 'use-sound';

import './navbar.css';

import wallet from './../../assets/wallet-dynamic-gradient.png';
import clock from './../../assets/clock-dynamic-gradient.png';
import logo from './../../assets/tool-dynamic-color.png';
import pingSound from './../../assets/ping.mp3';

function Navbar() {
  const [playHoverSound] = useSound(pingSound, { volume: 0.5 });

  return (
    <nav className="navbar">
      <div>
        <motion.div
          whileHover={{ scale: 1.2, transition: { duration: 0.2, ease: 'easeInOut' } }}
          onMouseEnter={() => playHoverSound()}
          onMouseLeave={playHoverSound.stop}
        >
          <img className='logo' src={logo} alt="logo" />
        </motion.div>
      </div>
      <div>
        <motion.div
          whileHover={{ rotate: -5, transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
          <h1 className='navbar_heading'>
            <span><img className='icon' src={wallet} alt="icon" /></span>Efficiency <span style={{ backgroundColor: '#fff', color: '#5a3e2b' }}>Redefined</span> <span><img className='icon' src={clock} alt="clock" /></span>
          </h1>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
