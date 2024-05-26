import { Article, Div, H2, H3, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

const HowToBuy: FC = () => (
  <Section my="5rem" mx="auto" maxWidth="90rem" id="howtobuy">
    <H2
      color="#F5EA8F"
      textAlign="center"
      textShadow="1px 1px 5px #0003"
      fontSize={['2rem', '2rem', '2rem', '3.5rem']}
    >
      How To Buy
    </H2>
    <Div
      mx="auto"
      px="2rem"
      mt="4rem"
      gap="2rem"
      display="grid"
      gridTemplateColumns={[
        '1fr',
        '1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr 1fr 1fr',
      ]}
    >
      <Article
        p="2rem 1rem"
        gap="2rem"
        bg="#F5EA8F"
        display="flex"
        alignItems="center"
        borderRadius="1rem"
        flexDirection="column"
        border="1px solid #40BAFA"
      >
        <Img width="8rem" height="8rem" src="/img/wallet.webp" />
        <H3 color="#40BAFA" textAlign="center" fontSize="0.8rem">
          Create a Wallet
        </H3>
        <P
          color="#000000"
          lineHeight="1.3rem"
          fontFamily="Grandstander"
          textAlign={['center', 'center', 'unset']}
        >
          Download Phantom or your wallet of choice from the app store or google
          play store for free. Desktop users, download the google chrome
          extension by going to phantom.app.
        </P>
      </Article>
      <Article
        p="2rem 1rem"
        gap="2rem"
        bg="#00EF8F"
        display="flex"
        alignItems="center"
        borderRadius="1rem"
        flexDirection="column"
        border="1px solid #F5EA8F"
      >
        <Img width="8rem" height="8rem" src="/img/sol.png" />
        <H3 color="#40BAFA" textAlign="center" fontSize="0.8rem">
          Get Some SOL
        </H3>
        <P
          color="#000000"
          lineHeight="1.3rem"
          fontFamily="Grandstander"
          textAlign={['center', 'center', 'unset']}
        >
          Have SOL in your wallet to switch to $Yoi. If you don’t have any SOL,
          you can buy SOL from an exchange or cross chain swap and send it to
          your wallet.
        </P>
      </Article>
      <Article
        p="2rem 1rem"
        gap="2rem"
        bg="#FD94D4"
        display="flex"
        alignItems="center"
        borderRadius="1rem"
        flexDirection="column"
        border="1px solid #00EF8F"
      >
        <Img
          width="8rem"
          height="8rem"
          borderRadius="50%"
          src="/img/raydium.png"
        />
        <H3 color="#F5EA8F" textAlign="center" fontSize="0.8rem">
          Go to Raydium
        </H3>
        <P
          color="#000000"
          lineHeight="1.3rem"
          fontFamily="Grandstander"
          textAlign={['center', 'center', 'unset']}
        >
          Go raydium.io in google chrome inside your Phantom app. Connect your
          wallet. Paste the $Yoi token address into Raydium and confirm the
          swap. When Phantom prompts you for a wallet signature, sign.
        </P>
      </Article>
      <Article
        p="2rem 1rem"
        gap="2rem"
        bg="#40BAFA"
        display="flex"
        alignItems="center"
        borderRadius="1rem"
        flexDirection="column"
        border="1px solid #F5EA8F"
      >
        <Img
          width="8rem"
          height="8rem"
          borderRadius="50%"
          src="/img/logo.webp"
        />
        <H3 color="#F5EA8F" textAlign="center" fontSize="0.8rem">
          Switch SOL for $Yoi
        </H3>
        <P
          color="#000000"
          lineHeight="1.3rem"
          fontFamily="Grandstander"
          textAlign={['center', 'center', 'unset']}
        >
          Switch SOL for $Yoi. We have ZERO taxes so you don’t need to worry
          about buying with a specific slippage, although you may need to use
          slippage during times of market volatility.
        </P>
      </Article>
    </Div>
  </Section>
);

export default HowToBuy;
