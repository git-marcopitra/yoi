import {
  Article,
  Div,
  type DivProps,
  H2,
  H3,
  Img,
  Li,
  Section,
  Span,
  Ul,
} from '@stylin.js/elements';
import { type CustomDomComponent, motion } from 'framer-motion';
import { FC } from 'react';

type MotionComponent = CustomDomComponent<Omit<DivProps, 'transition'>>;

const AnimatedBallon = motion(Div) as MotionComponent;

const Roadmap: FC = () => (
  <Section my="5rem" mx="auto" maxWidth="76rem" id="roadmap">
    <H2
      color="#F5EA8F"
      textAlign="center"
      fontSize={['2rem', '2rem', '2rem', '3.5rem']}
    >
      Roadmap
    </H2>
    <Div
      mx="auto"
      display="grid"
      justifyContent="center"
      maxWidth={['30rem', '30rem', '30rem', '60rem']}
      gridTemplateColumns={['30rem', '30rem', '30rem', '30rem 30rem']}
    >
      <AnimatedBallon
        pt="5.5rem"
        pb="7.5rem"
        px="6.5rem"
        width="30rem"
        height="30rem"
        display="flex"
        backgroundImage="url(/img/roadmap-balloon.webp)"
        backgroundSize="contain"
        animate={{ rotate: ['5deg', '-5deg'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 0.3,
          duration: 0.8 + Math.random() * 0.2,
        }}
      >
        <Article
          p="2rem"
          flex="1"
          gap="2rem"
          display="flex"
          flexDirection="column"
        >
          <H3 color="#FD94D4">Phase 1</H3>
          <Ul gap="1rem" display="flex" flexDirection="column">
            <Li fontFamily="Grandstander">
              {' > '}
              Pump Fun Fair Launch
            </Li>
            <Li fontFamily="Grandstander">
              {' > '}
              Community Formation
            </Li>
            <Li fontFamily="Grandstander">
              {' > '}
              Twitter Launch
            </Li>
            <Li fontFamily="Grandstander">
              {' > '}
              DEX Listing
            </Li>
          </Ul>
        </Article>
      </AnimatedBallon>
      <AnimatedBallon
        backgroundImage="url(/img/roadmap.webp)"
        backgroundSize="contain"
        display={['none', 'none', 'none', 'block']}
        animate={{ y: ['1rem', '0rem'] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <Div />
      <Div position="relative">
        <AnimatedBallon
          pt="5.5rem"
          pb="7.5rem"
          px="6.5rem"
          width="30rem"
          height="30rem"
          display="flex"
          backgroundImage="url(/img/roadmap-balloon.webp)"
          backgroundSize="contain"
          animate={{ rotate: ['5deg', '-5deg'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random(),
            duration: 0.8 + Math.random(),
          }}
        >
          <Article
            p="2rem"
            flex="1"
            gap="2rem"
            display="flex"
            flexDirection="column"
          >
            <H3 color="#FD94D4">Phase 2</H3>
            <Ul gap="1rem" display="flex" flexDirection="column">
              <Li fontFamily="Grandstander">
                {' > '}
                CMC + CoinGecko Listing
              </Li>
              <Li fontFamily="Grandstander">
                {' > '}
                Community Building
              </Li>
              <Li fontFamily="Grandstander">
                {' > '}
                Partnership
              </Li>
              <Li fontFamily="Grandstander">
                {' > '}
                CEX Listing
              </Li>
            </Ul>
          </Article>
        </AnimatedBallon>
        <Div
          top="-35%"
          position="absolute"
          transform="rotate(45deg)"
          left={['15%', '15%', '15%', '-30%']}
        >
          <Img src="/img/line.webp" alt="Line" width="20rem" />
        </Div>
      </Div>
      <Div position="relative">
        <AnimatedBallon
          pt="5.5rem"
          pb="7.5rem"
          px="6.5rem"
          width="30rem"
          height="30rem"
          display="flex"
          position="relative"
          backgroundImage="url(/img/roadmap-balloon.webp)"
          backgroundSize="contain"
          animate={{ rotate: ['5deg', '-5deg'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random(),
            duration: 0.8 + Math.random(),
          }}
        >
          <Article
            flex="1"
            py="2rem"
            px="1rem"
            gap="2rem"
            display="flex"
            flexDirection="column"
          >
            <Div>
              <H3 color="#FD94D4">Phase 3</H3>
              <Span fontFamily="Grandstander">
                (After 3 months or $100M MC)
              </Span>
            </Div>
            <Ul gap="1rem" display="flex" flexDirection="column">
              <Li fontFamily="Grandstander">
                {' > '}
                Burn all Marketing funds
              </Li>
              <Li fontFamily="Grandstander">
                {' > '}
                Many more...
              </Li>
            </Ul>
          </Article>
        </AnimatedBallon>
        <Div
          top="-35%"
          position="absolute"
          transform="rotate(-45deg)"
          right={['15%', '15%', '15%', '-30%']}
        >
          <Img src="/img/line.webp" alt="Line" width="20rem" />
        </Div>
      </Div>
    </Div>
  </Section>
);

export default Roadmap;
