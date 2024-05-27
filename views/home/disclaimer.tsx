import { Div, H3, Img, type ImgProps, P, Section } from '@stylin.js/elements';
import { CustomDomComponent, motion } from 'framer-motion';
import { FC } from 'react';

type MotionComponent = CustomDomComponent<Omit<ImgProps, 'transition'>>;

const AnimatedDiv = motion(Img) as MotionComponent;

const Disclaimer: FC = () => (
  <Section my="5rem" mx={['2rem', 'auto']} maxWidth="76rem">
    <Div display="flex" justifyContent="center">
      <AnimatedDiv
        alt="candle"
        src="/img/candle.webp"
        animate={{ y: ['1rem', '0rem'] }}
        maxWidth={['4rem', '7rem', '10rem', '12rem']}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
          duration: 0.8 + Math.random() * 2,
        }}
      />
      <AnimatedDiv
        alt="meditating"
        src="/img/meditating.webp"
        animate={{ y: ['1rem', '0rem'] }}
        maxWidth={['4rem', '7rem', '10rem', '12rem']}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
          duration: 0.8 + Math.random() * 2,
        }}
      />
      <AnimatedDiv
        alt="phone"
        src="/img/phone.webp"
        animate={{ y: ['1rem', '0rem'] }}
        maxWidth={['4rem', '7rem', '10rem', '12rem']}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
          duration: 0.8 + Math.random() * 2,
        }}
      />
      <AnimatedDiv
        alt="happy"
        src="/img/happy.webp"
        animate={{ y: ['1rem', '0rem'] }}
        maxWidth={['4rem', '7rem', '10rem', '12rem']}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
          duration: 0.8 + Math.random() * 2,
        }}
      />
      <AnimatedDiv
        alt="snipper"
        src="/img/snipper.webp"
        animate={{ y: ['1rem', '0rem'] }}
        maxWidth={['4rem', '7rem', '10rem', '12rem']}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
          duration: 0.8 + Math.random() * 2,
        }}
      />
    </Div>
    <Div
      mt="3rem"
      mx="auto"
      gap="1.5rem"
      color="#FFF9"
      display="grid"
      maxWidth="20rem"
      textAlign="center"
    >
      <H3 fontFamily="Grandstander">DISCLAIMER</H3>
      <P fontFamily="Grandstander">
        $YOI WAS MADE FOR A FAN AND HAS NO VALUE. DON{"'"}T RISK MONEY YOU ARE
        AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT
        RESPONSIBLE FOR THE PRICE OF THE TOKEN.
        <br />
        <br />
        $YOI ON SOLANA
      </P>
    </Div>
  </Section>
);

export default Disclaimer;
