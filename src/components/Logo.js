import websiteLogo from './../img/favicon-32x32.png';

function Logo() {
  return (
    <div className="logo">
      <img src={websiteLogo} alt="logo" className="logo__icon" />
    </div>
  );
}

export default Logo;
