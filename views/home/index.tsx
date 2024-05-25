import { FC } from 'react';

import { Layout } from '@/components';

import About from './about';
import Hero from './hero';
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
  </Layout>
);

export default Home;
