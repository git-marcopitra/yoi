import {
  Div,
  Footer,
  Header,
  Img,
  Li,
  Main,
  Nav,
  P,
} from '@stylin.js/elements';
import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';

import Social from '../social';
import { BarsSVG, TimesSVG } from '../svg';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Main minHeight="100vh">
      <Header p="1rem" borderRadius="100rem">
        <Div
          mx="auto"
          display="flex"
          maxWidth="90rem"
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
            <Link href="/#home">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                Home
              </Li>
            </Link>
            <Link href="/#about">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                About
              </Li>
            </Link>
            <Link href="/#mission">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                Mission
              </Li>
            </Link>
            <Link href="/#tokenomics">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                Tokenomics
              </Li>
            </Link>
            <Link href="/#roadmap">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                Roadmap
              </Li>
            </Link>
            <Link href="/#howtobuy">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                How to buy
              </Li>
            </Link>
            <Link href="/#faq">
              <Li
                cursor="pointer"
                transition="all 300ms ease-in"
                onClick={() => setIsOpen(false)}
                nHover={{ transform: 'scale(1.2)', color: '#F5EA8F' }}
              >
                FAQ
              </Li>
            </Link>
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
