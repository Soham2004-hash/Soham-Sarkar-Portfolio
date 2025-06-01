const AboutPage = () => {
  return (
    <>
      <h3>I am an Artificial Intelligence & Machine Learning enthusiast with a strong foundation in Machine Learning and Deep Learning. I have completed a course on TensorFlow and applied my knowledge to real-world projects. 
      </h3>
      <h3>
      One of my key projects, "CheckUpNow" is an AI-powered medico application that analyzes medical test reports and determines whether a patient needs a doctor's consultation.
      </h3>
      <h3>
      I am particularly interested in image classification and exploring its applications in various domains. Passionate about building intelligent systems, I continuously expand my skills to develop impactful AI solutions.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
