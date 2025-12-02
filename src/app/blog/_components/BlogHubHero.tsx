import styles from './BlogHubHero.module.scss';

export default function BlogHubHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <strong>Technical, Educational, Advanced</strong>
        <h1 className='nwt--f-h1'>Articles on technical topics</h1>
        <p>
          I publish three articles each week on topics regarding Web
          Development, Full-Stack Development, Technical Advances and News in
          Tech.
        </p>
      </div>
    </section>
  );
}
