import { Br, Div, H2, Img, ImgProps, P, Section } from '@stylin.js/elements';
import { type CustomDomComponent, motion } from 'framer-motion';
import { FC } from 'react';

import { onScreenVariants } from '@/constants/animation';

export type MotionImgComponent = CustomDomComponent<
  Omit<ImgProps, 'transition'>
>;
const AnimatedImg = motion(Img) as MotionImgComponent;

const About: FC = () => (
  <Section
    mx="auto"
    my="5rem"
    id="about"
    display="flex"
    maxWidth="76rem"
    alignItems="center"
    justifyContent="space-evenly"
    flexDirection={['column', 'column', 'column', 'row']}
  >
    <AnimatedImg
      alt="logo"
      src="/img/about.webp"
      whileInView="onscreen"
      initial="offscreenRight"
      variants={onScreenVariants}
      maxWidth={['20rem', '22rem', '25rem', '32rem']}
    />
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      maxWidth="35rem"
      flexDirection="column"
    >
      <H2
        color="#F5EA8F"
        textShadow="1px 1px 5px #0003"
        fontSize={['2rem', '2rem', '2rem', '3.5rem']}
        textAlign={['center', 'center', 'center', 'unset']}
      >
        About
      </H2>
      <P
        color="#ffffff"
        fontSize="1.2rem"
        lineHeight="2rem"
        fontFamily="Grandstander"
        textAlign={['center', 'center', 'unset']}
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
