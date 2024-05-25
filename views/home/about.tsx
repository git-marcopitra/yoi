import { Br, Div, H2, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

const About: FC = () => (
  <Section
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection={['column-reverse', 'column-reverse', 'row']}
  >
    <Img src="/img/logo.webp" alt="logo" maxHeight="30rem" />
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      maxWidth="35rem"
      flexDirection="column"
    >
      <H2 color="#F5EA8F" fontSize="3.5rem">
        About
      </H2>
      <P
        color="#ffffff"
        fontSize="1.2rem"
        lineHeight="2rem"
        fontFamily="Grandstander"
      >
        In Solana City, Yoi Inu, a rainbow-colored dog with sparkling eyes,
        emerged as a beacon of positivity. Named after the Japanese word for
        {'"good,"'} Yoi aimed to transform the toxic meme coin space plagued by
        scams.
        <Br />
        Yoi {"Inu's"} commitment to transparency and positivity will prove that
        good intentions and transparency could transform the world.
        <Br />
        {'Yoi’s'} friendly wave and joyful expression remind everyone that in
        this digital space, trust and transparency rule.
      </P>
    </Div>
  </Section>
);

export default About;
