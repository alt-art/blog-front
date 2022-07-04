import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import Description from '../components/Card/Description';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Title from '../components/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello World</title>
      </Head>
      <Header />
      <Title>Building software.</Title>
      <Grid>
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fugiat sit. Eaque, quam tempore perspiciatis reprehenderit dolor aperiam magni pariatur corporis repellat, consequuntur praesentium dicta. Qui magni voluptates velit quidem?"
        />
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
