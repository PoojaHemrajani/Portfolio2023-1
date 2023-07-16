import React from 'react';
import { DiFirebase, DiReact, DiCloud9 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Currently, I am working as an Saleforce Developer. I have worked as Developer, Admin, etc...
      I've also worked with a range a technologies in the web development world.
      From Back-end To Design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCloud9 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Salesforce</ListTitle>
          <ListParagraph>
            Experience with <br />
            Salesforce CRM
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
