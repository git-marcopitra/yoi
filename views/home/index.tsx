import { FC } from 'react';

import { Layout } from '@/components';

import About from './about';
import Hero from './hero';

const Home: FC = () => (
  <Layout>
    <Hero />
    <About />
  </Layout>
);

export default Home;
