import {
  Br,
  Div,
  H2,
  Img,
  type ImgProps,
  P,
  Section,
} from '@stylin.js/elements';
import { type CustomDomComponent, motion } from 'framer-motion';
import type { FC } from 'react';

import { onScreenVariants } from '@/constants/animation';

export type MotionImgComponent = CustomDomComponent<
  Omit<ImgProps, 'transition'>
>;
const AnimatedImg = motion(Img) as MotionImgComponent;

const Mission: FC = () => (
  <Section
    mx="auto"
    my="5rem"
    id="mission"
    display="flex"
    maxWidth="76rem"
    alignItems="center"
    justifyContent="center"
    flexDirection={['column', 'column', 'column', 'row']}
  >
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      maxWidth="45rem"
      flexDirection="column"
    >
      <H2
        color="#F5EA8F"
        textShadow="1px 1px 5px #0003"
        fontSize={['2rem', '2rem', '2rem', '3.5rem']}
        textAlign={['center', 'center', 'center', 'unset']}
      >
        Mission
      </H2>
      <P
        color="#ffffff"
        fontSize="1.2rem"
        lineHeight="2rem"
        fontFamily="Grandstander"
        textAlign={['center', 'center', 'unset']}
      >
        At Yoi Inu, our mission is to transform the meme coin space by fostering
        a community built on trust, transparency, and positivity.
        <Br />
        We aim to bring a breath of fresh air to an industry often marred by
        scams and deceit. Our commitment to openly sharing all marketing
        expenditures and operating with complete transparency sets us apart as a
        trusted entity.
        <Br />
        We strive to unite do-gooders from around the world, creating a vibrant
        and inclusive community that thrives on kindness, creativity, and
        collaboration.
        <Br />
        Through our efforts, we seek to inspire and empower individuals to
        contribute positively to the global meme community, leaving a lasting
        legacy of goodwill and integrity.
      </P>
    </Div>
    <AnimatedImg
      alt="logo"
      whileInView="onscreen"
      initial="offscreenLeft"
      variants={onScreenVariants}
      src="/img/mission.webp"
      maxWidth={['20rem', '22rem', '25rem', '32rem']}
    />
  </Section>
);

export default Mission;
