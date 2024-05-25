import {
  Div,
  type DivProps,
  Img,
  type ImgProps,
  P,
  Section,
} from '@stylin.js/elements';
import { type CustomDomComponent, motion } from 'framer-motion';
import type { FC } from 'react';

import { Social } from '@/components';

export type MotionImgComponent = CustomDomComponent<
  Omit<ImgProps, 'transition'>
>;
export type MotionDivComponent = CustomDomComponent<
  Omit<DivProps, 'transition'>
>;

const AnimatedDiv = motion(Div) as MotionDivComponent;
const AnimatedImg = motion(Img) as MotionImgComponent;

const variants = {
  offscreen: {
    x: '20vw',
  },
  onscreen: {
    x: '0vw',
    transition: {
      bounce: 0.2,
      duration: 1,
      type: 'spring',
    },
  },
};

const Hero: FC = () => (
  <Section
    mx="auto"
    my="5rem"
    px="2rem"
    id="home"
    display="flex"
    color="#ffffff"
    maxWidth="90rem"
    alignItems="center"
    mt={['1rem', '2rem', '5rem']}
    justifyContent="space-between"
    flexDirection={[
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'unset',
    ]}
  >
    <Div display="flex" flexDirection="column" gap="2.5rem" pb="2rem">
      <Div
        display="flex"
        flexDirection="column"
        alignItems={['center', 'center', 'unset']}
      >
        <P
          fontSize="2rem"
          fontFamily="Grandstander"
          textAlign={['center', 'center', 'center', 'unset']}
        >
          Introducing
        </P>
        <Img
          maxWidth={['22rem', '25rem', '32rem']}
          src="/img/title-logo.webp"
          alt="Title logo"
        />
        <P
          maxWidth="32rem"
          fontSize="1.5rem"
          fontFamily="Grandstander"
          textAlign={['center', 'center', 'center', 'unset']}
        >
          Trust and transparency, unleashed
        </P>
      </Div>
      <Social />
    </Div>
    <AnimatedDiv
      display="flex"
      position="relative"
      alignItems="center"
      initial="offscreen"
      variants={variants}
      whileInView="onscreen"
      justifyContent="center"
    >
      <Img src="/img/yoi-cloud-1.webp" alt="logo" maxWidth="32rem" />
      <AnimatedImg
        alt="logo"
        maxWidth="32rem"
        position="absolute"
        animate={{ opacity: [1, 0] }}
        src="/img/yoi-cloud-2.webp"
        transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </AnimatedDiv>
  </Section>
);

export default Hero;
