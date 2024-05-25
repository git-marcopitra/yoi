import { FC } from 'react';

import { Layout } from '@/components';

import About from './about';
import Hero from './hero';
import Mission from './mission';

const Home: FC = () => (
  <Layout>
    <Hero />
    <About />
    <Mission />
  </Layout>
);

export default Home;
