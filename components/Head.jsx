import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Soham Sarkar is a well AI-ML engineer who builds User Friendly Machine Learning Projects."
      />
      <meta
        name="keywords"
        content="soham sarkar, soham, sarkar, ai ml engineer, soham ml engineer, soham ai, ai ml, soham sarkar portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Soham Sarkar's Portfolio" />
      <meta
        property="og:description"
        content="An AI-ML Engineer who builds ML projects that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Soham Sarkar',
};
