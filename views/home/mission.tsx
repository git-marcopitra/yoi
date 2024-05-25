import { Br, Div, H2, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

const Mission: FC = () => (
  <Section
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection={['column', 'column', 'row']}
  >
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      maxWidth="45rem"
      flexDirection="column"
    >
      <H2 color="#F5EA8F" fontSize="3.5rem">
        Mission
      </H2>
      <P
        color="#ffffff"
        fontSize="1.2rem"
        lineHeight="2rem"
        fontFamily="Grandstander"
      >
        At Yoi Inu, our mission is to transform the meme coin space by fostering
        a community built on trust, transparency, and positivity.
        <Br />
        We aim to bring a breath of fresh air to an industry often marred by
        scams and deceit. Our commitment to openly sharing all marketing
        expenditures and operating with complete transparency sets us apart as a
        trusted entity.
        <Br />
        We strive to unite do-gooders from around the world, creating a vibrant
        and inclusive community that thrives on kindness, creativity, and
        collaboration.
        <Br />
        Through our efforts, we seek to inspire and empower individuals to
        contribute positively to the global meme community, leaving a lasting
        legacy of goodwill and integrity.
      </P>
    </Div>
    <Img src="/img/mission.webp" alt="logo" maxHeight="30rem" />
  </Section>
);

export default Mission;
