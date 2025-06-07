import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';
import { useEffect, useState } from 'react';

const GithubPage = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  const fetchGithubData = async () => {
    try {
      const userRes = await fetch(
        `https://api.github.com/users/soham2004-hash`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`
          },
        }
      );

      if (!userRes.ok) {
        const text = await userRes.text();
        console.log('User API Response:', text);
        throw new Error(`GitHub API error: ${userRes.status}`);
      }

      const user = await userRes.json();

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

      let fetchedRepos = await repoRes.json();
      fetchedRepos = fetchedRepos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

      setUserData({
        avatar_url: user.avatar_url || '',
        login: user.login || 'soham2004-hash',
        public_repos: user.public_repos || 0,
        followers: user.followers || 0
      });
      setRepos(fetchedRepos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      setUserData({
        avatar_url: 'https://github.com/soham2004-hash.png',
        login: 'soham2004-hash',
        public_repos: 0,
        followers: 0
      });
      setRepos([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={userData.avatar_url}
            className={styles.avatar}
            alt={userData.login}
            width={50}
            height={50}
            unoptimized
          />
          <h3 className={styles.username}>{userData.login}</h3>
        </div>
        <div>
          <h3>{userData.public_repos} repos</h3>
        </div>
        <div>
          <h3>{userData.followers} followers</h3>
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

export default GithubPage;
