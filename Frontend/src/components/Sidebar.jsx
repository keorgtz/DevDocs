//#region REACT COMPONENTS & VARIABLES
import styled from "styled-components";
import { v } from "../styles/Variables";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App"; 
//#endregion
//#region REACT ICONS & ASSETS
import logo from "../assets/react.svg";
import { AiOutlineLeft, AiFillProduct } from "react-icons/ai";
import { BiSolidUserBadge, BiSolidReport, BiSolidExit } from "react-icons/bi";
import { RiHomeFill, RiSettings2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
//#endregion


export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  //Funcion para cambiar el estado del Sidebar
  const modSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const {setTheme, theme} = useContext(ThemeContext);

  //Funcion para cambiar el tema
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse = {theme}>
      <button className="sidebarButton" onClick={modSidebarOpen}>
        <AiOutlineLeft />
      </button>
      <div className="LogoContent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h2> Aether </h2>
      </div>

      {linksArrays.map(({icon, label, to}) => (
        <div className="LinkContainer"  key={label}>
            <NavLink to={to} className={({isActive}) => `Links${isActive ?` active` : `` }`}> 
              <div className="linkIcon">
                {icon}
              </div>
              {sidebarOpen && (
                <span className="linkLabel"> {label} </span>
              )

              }
            </NavLink>
        </div>
      ))}
      <Divider/>
      {SecondlinksArrays.map(({icon, label, to}) => (
        <div className="LinkContainer"  key={label}>
            <NavLink to={to} className={({isActive}) => `Links${isActive ?` active` : `` }`}> 
              <div className="linkIcon">
                {icon}
              </div>
              {sidebarOpen && (
                <span className="linkLabel"> {label} </span>
              )

              }
            </NavLink>
        </div>
      ))}
      <Divider/>
      <div className="themeContent">
        {sidebarOpen && <span className="titleTheme"> Dark Mode </span>}
        <div className="toggleContent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch">
                  <input type="checkbox" className="theme-switch" onClick={toggleTheme}/>
                  <span className="slider round"></span>
                </label>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </Container>
  );
}

//#region DATA LINKS
const linksArrays = [
  {
    label: "Home",
    icon: <RiHomeFill />,
    to: "/",
  },
  {
    label: "Clients",
    icon: <BiSolidUserBadge />,
    to: "/clients",
  },
  {
    label: "Products",
    icon: <AiFillProduct />,
    to: "/products",
  },
  {
    label: "Reports",
    icon: <BiSolidReport />,
    to: "/reports",
  },
  {
    label: "Users",
    icon: <FaUser />,
    to: "/users",
  }
];
const SecondlinksArrays = [
  {
    label: "Configuration",
    icon: <RiSettings2Fill />,
    to: "/configuration",
  },
  {
    label: "Salir",
    icon: <BiSolidExit />,
    to: "/",
  }
];
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 1.5rem;
  transition: all 0.5s;
  .sidebarButton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .LogoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.xlSpacing};
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.5s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.8)` : `scale(1.4)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
      transition: all 0.5s;
    }
  }
  .LinkContainer{
    margin-top: 0px 0px;
    padding: 1% 22%;
    margin: ${({ isOpen }) => (isOpen ? `0.5rem 0` : `0.5rem 0.4rem`)};
    
    :hover{
      background: ${(props) => props.theme.bg3};
      border-radius: 1rem;
      transition: all 0.5s;
    }
    .Links{
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.mdSpacing} -2px) 0;
      color: ${(props) => props.theme.text};
      transform: ${({ isOpen }) => (isOpen ? `scale(1.1)` : `scale(1.3)`)};
      
      .linkIcon{
        padding: ${v.smSpacing} ${v.smSpacing};
        display: flex;
        svg{
          font-size: 1.4rem;
        }
        
      }
      &.active{
        .linkIcon{
          svg{
            color: ${(props) => props.theme.bg4};
            
          }
        }
      }
    }
    
  }
  .themeContent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titleTheme{
      padding: 1.3rem;
      padding-top: 1.5rem;
      display: block;
      font-weight: 700;
      opacity: ${({isOpen}) => (isOpen ? `1` : `0`)};}
      transition: all 0.5s;
      white-space:nowrap;
      overflow: hidden;
    }
   .toggleContent{
    margin: ${({ isOpen }) => (isOpen ? `2.1rem 2.1rem` : `2.1rem 1.3rem`)};
    width: 2.1rem;
    height: 1.2rem;
    border-radius: 0.8rem;
    transition: all 0.5s;
    position: relative;
      .theme-container{
        background-blend-mode: multiply multiply;
        transition: 0.4s;
        .grid{
          display: grid;
          justify-content: center;
          justify-items: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo{
          font-size: 2rem;
          .switch{
            position: relative;
            display: inline-block;
            width: 3.2rem;
            height: 1.5rem;
            .theme-switch{
              opacity: 0;
              width: 0;
              height: 0;
              &:checked +.slider:before{
                left: 0.3rem;
                content: "🌑";
                transform: translateX(16px);
              }
            }
          .slider{
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: ${({themeUse}) => (themeUse === "light"? v.lightcheckbox : v.darkcheckbox)};
              transition: 0.4s;
              &::before{
                position: absolute;
                content: "☀️";
                height: 0;
                width: 0;
                left: -0.5rem;
                top: 0.8rem;
                line-height: 0rem;
                transition: 0.4s;
              }
              &.round{
                 border-radius: 1rem;
                 &::before{
                  border-radius: 50%;
                 }
              }
            }
          }
        }
      } 
    }
  
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin-top: ${v.lgSpacing};
`;
//#endregion
