import styles from '../styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'sarkar04soham@gmail.com',
    href: 'mailto:sarkar04soham@gmail.com',
  },
  {
    social: 'github',
    link: 'soham2004-hash',
    href: 'https://github.com/soham2004-hash',
  },
  {
    social: 'linkedin',
    link: 'Soham Sarkar',
    href: 'https://www.linkedin.com/in/soham-sarkar-572795282/',
  },
  {
    social: 'twitter',
    link: 'soham',
    href: 'https://x.com/in_soham',
  },
  {
    social: 'leetcode',
    link: 'S_O_H_A_M',
    href: 'https://leetcode.com/u/S_O_H_A_M/',
  },
  {
    social: 'Kaggle',
    link: 'sohamsarkar28052004',
    href: 'https://www.kaggle.com/sohamsarkar28052004',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
