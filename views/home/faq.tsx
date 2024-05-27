import { Div, H2, P, Section } from '@stylin.js/elements';
import { FC, useState } from 'react';
import unikey from 'unikey';

const FAQ: FC = () => {
  const [currentFAQ, setFAQ] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      my="5rem"
      mx="auto"
      gap="4rem"
      display="flex"
      maxWidth="76rem"
      flexDirection="column"
    >
      <H2
        color="#F5EA8F"
        textAlign="center"
        textShadow="1px 1px 5px #0003"
        fontSize={['2rem', '2rem', '2rem', '3.5rem']}
      >
        FAQ
      </H2>
      <Div
        mx="1rem"
        overflow="hidden"
        borderRadius="1rem"
        border="4px solid #FFA9CD"
      >
        {[
          {
            question: 'Why $Yoi?',
            answer: `The name, you ask? It's memorable, perhaps jarring, and fits our main character.

          If this was a more philosophical question, as in why is LUCKY different, then we'd respond with the following:
          Success is not a finite resource reserved for a select few. It's an opportunity available to anyone willing to put in the effort and persevere through challenges. Successful folks are made of the same stuff as everyone else, but instead of shouting "Why me?" at the sky in frustration, they close their eyes, imagine winning and ask "Why not me?".
          So - why not you? Why not LUCKY?`,
          },
          {
            question: 'What is the contract address?',
            answer: `XXXXXXX67XTX7X7Y8X7X987X987XX7987X9XXXX`,
          },
          {
            question: 'Where can we buy?',
            answer: `$LUCKY is available to buy on Uniswap and MEXC. Join the LUCKY PLATOON on Telegram for detailed instructions or help.`,
          },
          {
            question: 'How can I contact the team?',
            answer: `You can reach us at: example@luckyonsol.io`,
          },
        ].map(({ question, answer }, index) => (
          <Div
            p="1.5rem"
            bg="white"
            gap="2rem"
            width="100%"
            display="flex"
            key={unikey()}
            flexDirection="column"
            {...(index && { borderTop: '4px solid #FFA9CD' })}
            onClick={() => setFAQ(index === currentFAQ ? null : index)}
            backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
          >
            <Div
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
            >
              <P color="#F5EA8F" fontSize="0.9rem">
                {question}
              </P>
              <P fontFamily="Grandstander" fontSize="1.8rem" color="#fff">
                {index === currentFAQ ? '-' : '+'}
              </P>
            </Div>
            {index === currentFAQ && (
              <P
                py="2rem"
                bg="white"
                color="#ffffff"
                fontSize="1rem"
                lineHeight="1.7rem"
                borderRadius="1rem"
                p={['1rem', '2rem']}
                wordBreak="break-word"
                fontFamily="Grandstander"
                border="4px solid #F5EA8F"
                onClick={(e) => e.stopPropagation()}
                backgroundImage="linear-gradient(180deg, #40BAFA 0%, #046BD2 100%)"
              >
                {answer}
              </P>
            )}
          </Div>
        ))}
      </Div>
    </Section>
  );
};

export default FAQ;
