import chefClaudeLogo from "../images/chef-claude-icon.png"

const Header = () => {
  return (
    <header>
        <img className="logo-image" src={chefClaudeLogo} alt="Chef Claude Icon" />
        <span className="logo-text">Chef Claude</span>
    </header>
  );
};

export default Header;
