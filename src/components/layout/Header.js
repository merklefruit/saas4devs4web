import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "@context/global";
import { SET_THEME } from "@context/types";

import { Container } from "@styles/global";

const Header = ({ toggleMenu, setToggleMenu }) => {
  const [{ theme }, dispatch] = useGlobalContext();
  const toggleTheme = (newTheme) => {
    dispatch({
      type: SET_THEME,
      theme: newTheme,
    });
  };

  return (
    <Container>
      <CustomHeader>
        <div className="header-nav">
          <div className="logo">
            <span>
              <Link to="/">SaaS4Devs</Link>
            </span>
          </div>
          <div className="nav-items">
            <p>
              <Link to="/support">Support Me</Link>
            </p>
            {theme === "light" && (
              <button onClick={() => toggleTheme("dark")}>🌜</button>
            )}
            {theme === "dark" && (
              <button onClick={() => toggleTheme("light")}>☀️</button>
            )}
          </div>
        </div>
      </CustomHeader>
    </Container>
  );
};

export default Header;

const CustomHeader = styled.div`
  display: block;
  position: relative;
  margin-top: 25px;

  a {
    color: ${({ theme }) => theme.text};
  }

  .header-nav {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    span {
      font-size: 1.6rem;
    }
  }

  .nav-items {
    display: flex;

    p {
      margin-left: 15px;
      a {
      }
    }
  }

  button {
    background: none;
    margin-left: 10px;
    font-size: 2rem;
    border: none;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`;
