import { Divide as Hamburger } from 'hamburger-react';

const ButtonOfMiniNav = ({ toggleMiniMenuState, toggleMiniMenuFunction }) => {
      return (
            <div>
                  <Hamburger toggled={!toggleMiniMenuState} toggle={toggleMiniMenuFunction} />
            </div>
      )
}
export default ButtonOfMiniNav;