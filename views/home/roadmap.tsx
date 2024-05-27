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
      width="100%"
      color="#F5EA8F"
      textAlign="center"
      textShadow="1px 1px 5px #0003"
      fontSize={['2rem', '2rem', '2rem', '3.5rem']}
    >
      Roadmap
    </H2>
    <Div
      mx="auto"
      pt="2rem"
      display="grid"
      justifyContent="center"
      maxWidth={['25rem', '30rem', '30rem', '60rem']}
      gridTemplateColumns={['25rem', '30rem', '30rem', '30rem 30rem']}
    >
      <AnimatedBallon
        zIndex="3"
        display="flex"
        position="relative"
        pt={['4rem', '5.5rem']}
        px={['4rem', '6.5rem']}
        width={['25rem', '30rem']}
        height={['25rem', '30rem']}
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
          <Ul gap="0.5rem" display="flex" flexDirection="column">
            <Li fontFamily="Fredoka">
              {' • '}
              Pump Fun Fair Launch
            </Li>
            <Li fontFamily="Fredoka">
              {' • '}
              Community Formation
            </Li>
            <Li fontFamily="Fredoka">
              {' • '}
              Twitter Launch
            </Li>
            <Li fontFamily="Fredoka">
              {' • '}
              DEX Listing
            </Li>
          </Ul>
        </Article>
      </AnimatedBallon>
      <Div />
      <Div />
      <Div position="relative" zIndex="2">
        <Div
          top="-35%"
          position="absolute"
          transform="rotate(45deg)"
          left={['15%', '15%', '15%', '-30%']}
        >
          <Img src="/img/line.webp" alt="Line" width={['17rem', '20rem']} />
        </Div>
        <AnimatedBallon
          display="flex"
          pt={['4rem', '5.5rem']}
          px={['4rem', '6.5rem']}
          width={['25rem', '30rem']}
          height={['25rem', '30rem']}
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
            <Ul gap="0.5rem" display="flex" flexDirection="column">
              <Li fontFamily="Fredoka">
                {' • '}
                CMC + CoinGecko Listing
              </Li>
              <Li fontFamily="Fredoka">
                {' • '}
                Community Building
              </Li>
              <Li fontFamily="Fredoka">
                {' • '}
                Partnership
              </Li>
              <Li fontFamily="Fredoka">
                {' • '}
                CEX Listing
              </Li>
            </Ul>
          </Article>
        </AnimatedBallon>
      </Div>
      <Div position="relative" zIndex="1">
        <Div
          top="-35%"
          position="absolute"
          transform="rotate(-45deg)"
          right={['20%', '15%', '15%', '-30%']}
        >
          <Img src="/img/line.webp" alt="Line" width={['17rem', '20rem']} />
        </Div>
        <AnimatedBallon
          display="flex"
          position="relative"
          pt={['4rem', '5.5rem']}
          px={['4rem', '6.5rem']}
          width={['25rem', '30rem']}
          height={['25rem', '30rem']}
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
              <Span fontFamily="Fredoka" color="#888">
                (After 3 months or $100M MC)
              </Span>
            </Div>
            <Ul gap="0.5rem" display="flex" flexDirection="column">
              <Li fontFamily="Fredoka">
                {' • '}
                Burn all Marketing funds
              </Li>
              <Li fontFamily="Fredoka">
                {' • '}
                Many more...
              </Li>
            </Ul>
          </Article>
        </AnimatedBallon>
      </Div>
    </Div>
  </Section>
);

export default Roadmap;
