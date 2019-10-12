import React, {Component} from 'react';
import "../../styles/header.css";

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={"nav-bar"}>
        <div className="nav-bar-logo">
          <img src={"https://www.mercari.com/static/icons/logo-white.svg"} alt="Mercari Logo"/>
        </div>
        <div className="nav-bar-icons">
          <div className="person-icon icons">
            <svg fill="none" width="25px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M1.479 23.398c0-5.81 4.71-10.521 10.521-10.521 5.811 0 10.522 4.71 10.522 10.521H1.479z" stroke="#fff"/>
              <path d="M12 12.877A6.138 6.138 0 1 0 12 .601a6.138 6.138 0 0 0 0 12.276z" stroke="#fff"/>
            </svg>
          </div>
          <div className="cart-icon icons">
            <svg style={{cursor:"pointer"}} height="22" viewBox="0 0 25 22" width="25" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff">
                <path d="M9.854 16.986c-1.375 0-2.493 1.118-2.493 2.493s1.118 2.494 2.493 2.494a2.496 2.496 0 0 0 2.494-2.494 2.502 2.502 0 0 0-2.494-2.493zm0 3.969a1.46 1.46 0 0 1-1.466-1.467c0-.816.65-1.466 1.466-1.466s1.467.65 1.467 1.466a1.46 1.46 0 0 1-1.467 1.467zM18.352 16.986c-1.375 0-2.494 1.118-2.494 2.493s1.119 2.494 2.494 2.494 2.493-1.119 2.493-2.494a2.502 2.502 0 0 0-2.493-2.493zm0 3.969a1.46 1.46 0 0 1-1.467-1.467c0-.816.65-1.466 1.467-1.466.815 0 1.466.65 1.466 1.466 0 .807-.65 1.467-1.466 1.467zM24.796 3.456c.037-.165-.018-.321-.101-.431s-.23-.193-.394-.202h-.248.248H5.39L4.382.312 4.18.403h.01l.2-.082A.529.529 0 0 0 3.915 0h-3.4a.512.512 0 1 0 0 1.027h3.052l4.317 10.798-1.338 3.208a.505.505 0 0 0 .055.477.486.486 0 0 0 .422.23h14.162c.275 0 .513-.24.513-.514s-.238-.514-.513-.514H7.792l1.008-2.41 13.842-1.1a.518.518 0 0 0 .449-.385l-.092-.019.092.019v-.01l-.22-.055.22.055 1.705-7.351-.083.366zm-2.613 6.774l-13.41 1.063-2.97-7.434H23.65z"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};


export default Header;