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
import { onScreenVariants } from '@/constants/animation';

export type MotionDivComponent = CustomDomComponent<
  Omit<DivProps, 'transition'>
>;
const AnimatedDiv = motion(Div) as MotionDivComponent;

export type MotionImgComponent = CustomDomComponent<
  Omit<ImgProps, 'transition'>
>;
const AnimatedImg = motion(Img) as MotionImgComponent;

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
    justifyContent="space-evenly"
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
          maxWidth={['18rem', '22rem', '25rem', '32rem']}
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
      whileInView="onscreen"
      initial="offscreenLeft"
      variants={onScreenVariants}
      justifyContent="center"
    >
      <AnimatedImg
        alt="logo"
        src="/img/yoi-cloud-1.webp"
        animate={{ x: ['-5px', '5px'] }}
        maxWidth={['22rem', '25rem', '32rem']}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <AnimatedImg
        alt="logo"
        position="absolute"
        src="/img/yoi-cloud-2.webp"
        maxWidth={['22rem', '25rem', '32rem']}
        animate={{ opacity: [1, 0], x: ['-5px', '5px'] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </AnimatedDiv>
  </Section>
);

export default Hero;
