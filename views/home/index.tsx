import { FC } from 'react';

import { Layout } from '@/components';

import About from './about';
import Disclaimer from './disclaimer';
import FAQ from './faq';
import Hero from './hero';
import HowToBuy from './how-to-buy';
import Mission from './mission';
import Roadmap from './roadmap';
import Tokenomics from './tokenomics';

const Home: FC = () => (
  <Layout>
    <Hero />
    <About />
    <Mission />
    <Tokenomics />
    <Roadmap />
    <HowToBuy />
    <FAQ />
    <Disclaimer />
  </Layout>
);

export default Home;
