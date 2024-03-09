import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaList } from "react-icons/fa";


const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        <MenuIconWrapper>
          <FaList />
          <CategoryName>{route.name}</CategoryName>
        </MenuIconWrapper>
        {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute, index) => (
          <React.Fragment key={subRoute.name}>
            <SubRoute to={subRoute.link}>{subRoute.name}</SubRoute>
            {index !== route.subRoutes.length-1 && <hr />} {/* Add hr except for the last subroute */}
          </React.Fragment>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default ExpandMenu;

const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 0.7rem;
`;

const SMenu = styled.div``;

const MenuButton = styled.div`
font-size: 0.82rem;
padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled.span`
  margin-left: 0.7rem; 
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.2rem;
  font-size: 0.7rem;
  margin-left: 1.4rem; 

`;
