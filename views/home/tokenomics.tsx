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
        fontSize={['1.5rem', '2rem', '2rem', '3.5rem']}
      >
        Tokenomics
      </H2>
      <Div
        width="25rem"
        height="25rem"
        color="#ffffff"
        position="relative"
        transform={['scale(0.8)', 'scale(1)']}
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
        p="2rem"
        mx="auto"
        mt="2rem"
        gap="2rem"
        width="100%"
        display="flex"
        maxWidth="76rem"
        position="relative"
        flexDirection="column"
      >
        <Div
          py="2rem"
          bg="white"
          borderRadius="1rem"
          p={['1rem', '2rem']}
          border="4px solid #F5EA8F"
          backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
        >
          <Div
            display="flex"
            color="#ffffff"
            overflow="hidden"
            fontSize="1.2rem"
            alignItems="center"
            borderRadius="100rem"
            border="2px solid #F5EA8F"
          >
            <P flex="1" fontFamily="Grandstander" textAlign="center">
              CA Coming Soon
            </P>
            <Button
              all="unset"
              py="1.2rem"
              bg="#FFA9CD"
              display="flex"
              cursor="not-allowed"
              borderLeft="2px solid #F5EA8F"
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
          gap="2rem"
          display="flex"
          flexDirection={['column', 'column', 'row']}
        >
          <Div
            p="1.5rem"
            bg="white"
            gap="1rem"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Name
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              Yoiinu
            </P>
          </Div>
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Network
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              SOL
            </P>
          </Div>
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Symbol
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              $Yoi
            </P>
          </Div>
        </Div>
        <Div
          gap="2rem"
          display="flex"
          flexDirection={['column', 'column', 'row']}
        >
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Total Supply
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              1 Billion
            </P>
          </Div>
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Buy/Sell Tax
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              0%
            </P>
          </Div>
        </Div>
        <Div
          gap="2rem"
          display="flex"
          flexDirection={['column', 'column', 'row']}
        >
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Marketing
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              5%
            </P>
          </Div>
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Holders
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              3%
            </P>
          </Div>
          <Div
            p="1.5rem"
            gap="1rem"
            bg="white"
            width="100%"
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            border="4px solid #FFA9CD"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <P color="#F5EA8F" fontSize="0.9rem">
              Team
            </P>
            <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
              5%
            </P>
          </Div>
        </Div>
      </Div>
    </Div>
  </Section>
);

export default Tokenomics;
