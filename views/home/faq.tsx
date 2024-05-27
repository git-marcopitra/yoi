import { Div, H2, P, Section } from '@stylin.js/elements';
import { FC, useState } from 'react';
import unikey from 'unikey';

const AQ = [
  {
    question: 'Why $Yoi?',
    answer: (
      <>
        Why choose $YOI you ask? Because {"we're"} transforming the meme coin
        space with trust, transparency, and positivity.
        <br /> Our transparent operations and open marketing expenditures set us
        apart.
        <br /> {"We're"} uniting a global community driven by kindness,
        creativity, and collaboration. {"It's"} an opportunity for anyone
        willing to persevere. Successful people imagine winning and ask,
        {' "Why not me?"'} So - why not you? Why not YOI? Join us to inspire and
        empower positive change, leaving a legacy of goodwill and integrity.
      </>
    ),
  },
  {
    question: 'What is the contract address?',
    answer: 'Coming Soon',
  },
  {
    question: 'Where can we buy?',
    answer: (
      <>
        $YOI will available to buy on Jupiter and Raydium. Join the YOI INU chat
        on Telegram for detailed instructions or help.
      </>
    ),
  },
  {
    question: 'How can I contact the team?',
    answer: (
      <>
        You can reach us at:{' '}
        <a href="mailto:yoiinusolana@gmail.com">yoiinusolana@gmail.com</a>
      </>
    ),
  },
];

const FAQ: FC = () => {
  const [currentFAQ, setFAQ] = useState<number | null>(null);

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
        {AQ.map(({ question, answer }, index) => (
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
