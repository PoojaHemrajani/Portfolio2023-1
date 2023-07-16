import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pujahem24@gmail.com">
          pujahem24@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' href="https://github.com/PoojaHemrajani">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target='_blank'  href="https://www.linkedin.com/in/pooja-hemrajani-400b99189/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target='_blank'  href="https://www.instagram.com/puja_hemrajani/?hl=en">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
