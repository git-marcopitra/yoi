import { Article, Div, H2, H3, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

const HowToBuy: FC = () => (
  <Section my="5rem" mx="auto" maxWidth="90rem">
    <H2
      color="#F5EA8F"
      textAlign="center"
      fontSize={['2rem', '2rem', '2rem', '3.5rem']}
    >
      How To Buy
    </H2>
    <Div
      mx="auto"
      display="grid"
      width={['20rem', '20rem', '40rem', '40rem', '80rem']}
      gridTemplateColumns={[
        '1fr',
        '1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr 1fr 1fr',
      ]}
    >
      <Article>
        <Div
          p="2rem"
          width="18rem"
          height="18rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-title.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <H3 color="#FD94D4" textAlign="center">
            Create a Wallet
          </H3>
        </Div>
        <Div
          p="4rem"
          flex="1"
          mt="-8rem"
          gap="2rem"
          width="20rem"
          height="20rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-balloon.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <P
            color="#ffffff"
            textAlign="center"
            lineHeight="1.3rem"
            fontFamily="Grandstander"
          >
            Download Phantom or your wallet of choice from the app store or
            google play store for free. Desktop users, download the google
            chrome extension by going to phantom.app.
          </P>
        </Div>
      </Article>
      <Article>
        <Div
          p="2rem"
          width="18rem"
          height="18rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-title.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <H3 color="#FD94D4" textAlign="center">
            Get Some SOL
          </H3>
        </Div>
        <Div
          p="4rem"
          flex="1"
          mt="-8rem"
          gap="2rem"
          width="20rem"
          height="20rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-balloon.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <P
            color="#ffffff"
            textAlign="center"
            lineHeight="1.3rem"
            fontFamily="Grandstander"
          >
            Have SOL in your wallet to switch to $Yoi. If you don’t have any
            SOL, you can buy SOL from an exchange or cross chain swap and send
            it to your wallet.
          </P>
        </Div>
      </Article>
      <Article>
        <Div
          p="2rem"
          width="18rem"
          height="18rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-title.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <H3 color="#FD94D4" textAlign="center">
            Go to Raydium
          </H3>
        </Div>
        <Div
          p="4rem"
          flex="1"
          mt="-8rem"
          gap="2rem"
          width="20rem"
          height="20rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-balloon.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <P
            color="#ffffff"
            textAlign="center"
            lineHeight="1.3rem"
            fontFamily="Grandstander"
          >
            Go raydium.io in google chrome inside your Phantom app. Connect your
            wallet. Paste the $Yoi token address into Raydium and confirm the
            swap. When Phantom prompts you for a wallet signature, sign.
          </P>
        </Div>
      </Article>
      <Article>
        <Div
          p="2rem"
          width="18rem"
          height="18rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-title.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <H3 color="#FD94D4" textAlign="center">
            Switch SOL for $Yoi
          </H3>
        </Div>
        <Div
          p="4rem"
          flex="1"
          mt="-8rem"
          gap="2rem"
          width="20rem"
          height="20rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage="url(/img/speech-balloon.webp)"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <P
            color="#ffffff"
            textAlign="center"
            lineHeight="1.3rem"
            fontFamily="Grandstander"
          >
            Switch SOL for $Yoi. We have ZERO taxes so you don’t need to worry
            about buying with a specific slippage, although you may need to use
            slippage during times of market volatility.
          </P>
        </Div>
      </Article>
    </Div>
  </Section>
);

export default HowToBuy;
