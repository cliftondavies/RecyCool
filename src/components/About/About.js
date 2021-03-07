import styles from './About.module.scss';

const About = () => {
  const paragraph = `Our mission is to build a worldwide sharing movement that reduces waste, saves precious resources and
  eases the burden on landfills while enabling our members to benefit from the strength of a larger community.`;

  return (
    <div className={styles.about}>
      <header />

      <main>
        <p>{paragraph}</p>
      </main>
    </div>
  );
};

export default About;
