import {
  Button,
  Div,
  Footer,
  Header,
  Img,
  Li,
  Main,
  Nav,
  P,
} from '@stylin.js/elements';
import { FC, PropsWithChildren, useState } from 'react';

import Social from '../social';
import { BarsSVG, TimesSVG } from '../svg';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Main minHeight="100vh">
      <Header m="1rem" p="1rem" bg="#FF8AC9" borderRadius="100rem">
        <Div
          mx="auto"
          display="flex"
          maxWidth="80rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Img src="/img/full-logo.webp" alt="logo" maxHeight="5rem" />
          <Div
            mr="2rem"
            color="#fff"
            cursor="pointer"
            onClick={() => setIsOpen((v) => !v)}
            display={['flex', 'flex', 'flex', 'flex', 'none']}
          >
            {isOpen ? (
              <TimesSVG maxHeight="2rem" maxWidth="2rem" width="100%" />
            ) : (
              <BarsSVG maxHeight="2rem" maxWidth="2rem" width="100%" />
            )}
          </Div>
          <Nav
            zIndex="1"
            gap="2rem"
            color="#fff"
            fontSize="0.75rem"
            alignItems="center"
            borderRadius="2rem"
            p={['2rem', '2rem', '2rem', '2rem', 'unset']}
            top={['9rem', '9rem', '9rem', '9rem', 'unset']}
            left={['1rem', '1rem', '1rem', '1rem', 'unset']}
            right={['1rem', '1rem', '1rem', '1rem', 'unset']}
            bottom={['1rem', '1rem', '1rem', '1rem', 'unset']}
            position={['fixed', 'fixed', 'fixed', 'fixed', 'unset']}
            bg={['#FF8AC9', '#FF8AC9', '#FF8AC9', '#FF8AC9', 'unset']}
            flexDirection={['column', 'column', 'column', 'column', 'unset']}
            justifyContent={[
              'space-evenly',
              'space-evenly',
              'space-evenly',
              'space-evenly',
              'unset',
            ]}
            display={[
              isOpen ? 'flex' : 'none',
              isOpen ? 'flex' : 'none',
              isOpen ? 'flex' : 'none',
              isOpen ? 'flex' : 'none',
              'flex',
            ]}
          >
            <Li
              cursor="pointer"
              transition="all 300ms ease-in"
              onClick={() => setIsOpen(false)}
              nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
            >
              Home
            </Li>
            <Li
              cursor="pointer"
              transition="all 300ms ease-in"
              onClick={() => setIsOpen(false)}
              nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
            >
              About
            </Li>
            <Li
              cursor="pointer"
              transition="all 300ms ease-in"
              onClick={() => setIsOpen(false)}
              nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
            >
              Mission
            </Li>
            <Li
              cursor="pointer"
              transition="all 300ms ease-in"
              onClick={() => setIsOpen(false)}
              nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
            >
              Tokenomics
            </Li>
            <Li
              cursor="pointer"
              transition="all 300ms ease-in"
              onClick={() => setIsOpen(false)}
              nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
            >
              Roadmap
            </Li>
            <Li
              cursor="pointer"
              transition="all 300ms ease-in"
              onClick={() => setIsOpen(false)}
              nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
            >
              How to buy
            </Li>
            <Button
              all="unset"
              p="1.2rem 2rem"
              fontSize="1.2rem"
              cursor="not-allowed"
              borderRadius="100rem"
              border="3px solid white"
              filter="grayScale(100%)"
              fontFamily="Grandstander"
              bg="linear-gradient(90deg, #FFA9CD 0%, #A3ADF3 100%);"
            >
              Buy now
            </Button>
          </Nav>
        </Div>
      </Header>
      {children}
      <Footer
        p="2rem"
        mx="auto"
        display="flex"
        maxWidth="90vw"
        alignItems="center"
        borderTop="1px solid #fff"
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'row']}
      >
        <P color="#fff" fontSize="1.25rem" fontFamily="Grandstander">
          © 2024 Yoiinu • All Rights Reserved
        </P>
        <Social />
      </Footer>
    </Main>
  );
};

export default Layout;
