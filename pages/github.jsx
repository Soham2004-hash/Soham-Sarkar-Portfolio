import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url || 'https://github.com/soham2004-hash.png'}
            className={styles.avatar}
            alt={user.login || 'soham2004-hash'}
            width={50}
            height={50}
            unoptimized
          />
          <h3 className={styles.username}>{user.login || 'soham2004-hash'}</h3>
        </div>
        <div>
          <h3>{user.public_repos || 0} repos</h3>
        </div>
        <div>
          <h3>{user.followers || 0} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username="soham2004-hash"
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/soham2004-hash`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`
        },
      }
    );

    if (!userRes.ok) {
      const text = await userRes.text();
      console.log('User API Response:', text);
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const user = await userRes.json();
    console.log('User data:', user);

    const repoRes = await fetch(
      `https://api.github.com/users/soham2004-hash/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`
        },
      }
    );

    if (!repoRes.ok) {
      const text = await repoRes.text();
      console.log('Repo API Response:', text);
      throw new Error(`GitHub API error: ${repoRes.status}`);
    }

    let repos = await repoRes.json();
    console.log('Repos data:', repos);

    repos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    return {
      props: {
        title: 'GitHub',
        repos,
        user: {
          ...user,
          avatar_url: user.avatar_url || '',
          login: user.login || 'soham2004-hash',
          public_repos: user.public_repos || 0,
          followers: user.followers || 0
        }
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return {
      props: {
        title: 'GitHub',
        repos: [],
        user: {
          avatar_url: 'https://github.com/soham2004-hash.png',
          login: 'soham2004-hash',
          public_repos: 0,
          followers: 0
        }
      },
      revalidate: 10,
    };
  }
}

export default GithubPage;
