import {
  Button,
  Div,
  H2,
  Img,
  P,
  Section,
  Span,
  type SpanProps,
} from '@stylin.js/elements';
import { type CustomDomComponent, motion } from 'framer-motion';
import { FC } from 'react';

import { CopySVG, StarSVG } from '@/components/svg';

type MotionComponent = CustomDomComponent<Omit<SpanProps, 'transition'>>;

const AnimatedSpan = motion(Span) as MotionComponent;

const Tokenomics: FC = () => (
  <Section
    mx="auto"
    id="tokenomics"
    maxWidth="90rem"
    mt={['3rem', '3rem', '3rem', '3rem', '10rem']}
  >
    <Div display="flex" flexDirection="column" alignItems="center">
      <H2
        color="#F5EA8F"
        textAlign="center"
        fontSize={['2rem', '2rem', '2rem', '3.5rem']}
      >
        Tokenomics
      </H2>
      <Div
        width="25rem"
        height="25rem"
        color="#ffffff"
        position="relative"
        display={['block', 'block', 'block', 'block', 'none']}
      >
        <Img alt="logo" width="25rem" src="/img/tokenomics.webp" />
        <AnimatedSpan
          top="15rem"
          left="10rem"
          position="absolute"
          initial={{ scale: 1 }}
          animate={{ scale: [0.3, 1.2] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
            duration: 0.8 + Math.random() * 0.3,
          }}
        >
          <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </AnimatedSpan>
        <AnimatedSpan
          top="15.5rem"
          left="19rem"
          position="absolute"
          initial={{ scale: 1 }}
          animate={{ scale: [0.7, 1.3] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
            duration: 0.8 + Math.random() * 0.3,
          }}
        >
          <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </AnimatedSpan>
        <AnimatedSpan
          top="18.5rem"
          left="15.8rem"
          position="absolute"
          initial={{ scale: 1 }}
          animate={{ scale: [0.8, 1.2] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
            duration: 0.8 + Math.random() * 0.3,
          }}
        >
          <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </AnimatedSpan>
      </Div>
      <Div
        my="3rem"
        bg="#ffffff"
        display="flex"
        overflow="hidden"
        fontSize="1.2rem"
        alignItems="center"
      >
        <P
          flex="1"
          fontFamily="Grandstander"
          textAlign="center"
          px={['1rem', '2rem', '5rem']}
        >
          CA Coming Soon
        </P>
        <Button
          all="unset"
          py="1.2rem"
          bg="#FFA9CD"
          display="flex"
          cursor="not-allowed"
          px={['0.5rem', '0.5rem', '2rem']}
        >
          <Span
            display="block"
            fontFamily="Grandstander"
            px={['0.5rem', '0.5rem', '3rem']}
          >
            Copy
          </Span>
          <CopySVG width="100%" maxWidth="1.2rem" maxHeight="1.2rem" />
        </Button>
      </Div>
    </Div>
    <Div
      p="2rem"
      mx="auto"
      gap="2rem"
      display="grid"
      maxWidth="76rem"
      position="relative"
      justifyItems="center"
      flexDirection="column"
      mt={['2rem', '2rem', '2rem', '2rem', '8rem']}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
    >
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Name
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          Yoiinu
        </P>
      </Div>
      <Div
        mt="-10rem"
        height="25rem"
        width="25rem"
        color="#ffffff"
        position="relative"
        display={['none', 'none', 'none', 'none', 'block']}
      >
        <Img alt="logo" width="25rem" src="/img/tokenomics.webp" />
        <AnimatedSpan
          top="15rem"
          left="10rem"
          position="absolute"
          initial={{ scale: 1 }}
          animate={{ scale: [0.3, 1.2] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
            duration: 0.8 + Math.random() * 0.3,
          }}
        >
          <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </AnimatedSpan>
        <AnimatedSpan
          top="15.5rem"
          left="19rem"
          position="absolute"
          initial={{ scale: 1 }}
          animate={{ scale: [0.7, 1.3] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
            duration: 0.8 + Math.random() * 0.3,
          }}
        >
          <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </AnimatedSpan>
        <AnimatedSpan
          top="18.5rem"
          left="15.8rem"
          position="absolute"
          initial={{ scale: 1 }}
          animate={{ scale: [0.8, 1.2] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
            duration: 0.8 + Math.random() * 0.3,
          }}
        >
          <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </AnimatedSpan>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Network
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          SOL
        </P>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Symbol
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          $Yoi
        </P>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Total Supply
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          1 Billion
        </P>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Buy/Sell Tax
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          0%
        </P>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Marketing
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          5%
        </P>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Holders
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          3%
        </P>
      </Div>
      <Div
        p="1.5rem"
        gap="2rem"
        my="-5rem"
        mx="-2.5rem"
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        backgroundImage="url(/img/tokenomics-balloon.webp)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <P color="#FFA9CD" fontSize="0.9rem">
          Team
        </P>
        <P fontFamily="Grandstander" fontSize="1.8rem">
          5%
        </P>
      </Div>
    </Div>
  </Section>
);

export default Tokenomics;
