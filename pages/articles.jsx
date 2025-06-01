import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  let articles = [];
  
  if (process.env.DEV_TO_API_KEY) {
    try {
      const res = await fetch(
        'https://dev.to/api/articles/me/published?per_page=6',
        {
          headers: {
            'api-key': process.env.DEV_TO_API_KEY,
          },
        }
      );

      if (res.ok) {
        articles = await res.json();
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }

  return {
    props: { 
      title: 'Articles', 
      articles: articles 
    },
    revalidate: 60,
  };
}

export default ArticlesPage;
