import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2023 BMyka</p>
      <Link href="https://github.com/BMyka" target="_blank">
        <FaGithub />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color ${({ theme }) => theme.colors.dark};
  color ${({ theme }) => theme.colors.light};
`;

const Link = styled.a`
  position: relative;
  top: 0.3rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }

  :active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`;
export default Footer;