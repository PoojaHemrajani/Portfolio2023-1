import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        My self Pooja Hemrajani a Salesforce Developer and part-time Web Developer<i>(Hobby)</i>. I am a passionate Salesforce Developer with expertise in building custom solutions. With a deep understanding of the Salesforce platform, I am dedicated to transforming organizations by automating processes and streamlining workflows.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;