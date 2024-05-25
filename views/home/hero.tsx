import { Div, Img, type ImgProps, P, Section } from '@stylin.js/elements';
import { type CustomDomComponent, motion } from 'framer-motion';
import type { FC } from 'react';

import { Social } from '@/components';

export type MotionComponent = CustomDomComponent<Omit<ImgProps, 'transition'>>;

const AnimatedImg = motion(Img) as MotionComponent;

const Hero: FC = () => (
  <Section
    mx="auto"
    px="2rem"
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
        <P textAlign={['center', 'center', 'center', 'unset']}>Introducing</P>
        <Img
          maxWidth={['22rem', '25rem', '32rem']}
          src="/img/title-logo.webp"
          alt="Title logo"
        />
        <P maxWidth="32rem" textAlign={['center', 'center', 'center', 'unset']}>
          Trust and transparency, unleashed
        </P>
      </Div>
      <Social />
    </Div>
    <Div
      display="flex"
      position="relative"
      alignItems="center"
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
    </Div>
  </Section>
);

export default Hero;
