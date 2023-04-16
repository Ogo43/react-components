import "boxicons";
import List from "./List";
import { header_data } from "../data";
import IconsLink from "./IconLink";
import Icon from "./Icon";
import { icons_link } from "../data";

const NavBar = () => {
  return (
    <>
      <header className="nav-header">
        <nav className="nav-style">
          <ul className="nav-bar">
            {header_data.map((data, index) => {
              return (
                <List name={data.name} address={data.address} key={index} />
              );
            })}

            {icons_link.map((data, index) => {
              return (
                <IconsLink address={data.address} key={index}>
                  <Icon name={data.name } />
                </IconsLink>
              );
            })}
            
            {/* <li>
              <a href="https://www.google.com.ng/intl/en/about/products">
              </a>
            </li>
            <li>
              <a href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://wwww.google.com/">
                <box-icon type="solid" name="user-circle"></box-icon>
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
