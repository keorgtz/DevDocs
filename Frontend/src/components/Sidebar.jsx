//#region REACT COMPONENTS & VARIABLES
import styled from "styled-components";
import { v } from "../styles/Variables";
import { NavLink } from "react-router-dom";
//#endregion
//#region REACT ICONS & ASSETS
import logo from "../assets/react.svg";
import { AiOutlineLeft, AiFillProduct } from "react-icons/ai";
import { BiSolidUserBadge, BiSolidReport, BiSolidExit } from "react-icons/bi";
import { RiHomeFill, RiSettings2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
//#endregion


export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const modSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container isOpen={sidebarOpen}>
      <button className="sidebarButton" onClick={modSidebarOpen}>
        <AiOutlineLeft />
      </button>
      <div className="LogoContent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h2> DevDocs </h2>
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
  padding-top: 20px;
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
    padding-bottom: ${v.lgSpacing};
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.5s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.8)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
      transition: all 0.5s;
    }
  }
  .LinkContainer{
    margin-top: 8px 0;
    padding: 0 15%;
    :hover{
      background: ${(props) => props.theme.bg3};

    }
    .Links{
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      .linkIcon{
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg{
          font-size: 1.6rem;

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
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin-top: ${v.lgSpacing};
`;
//#endregion
