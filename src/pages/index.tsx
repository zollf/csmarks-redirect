import React from 'react';

import styles from './styles.module.scss';

const Index = () => {
  return (
    <div className={styles.index}>
      <a rel="noopener noreferrer" target="_blank" href="https://secure.csse.uwa.edu.au/run/csmarks">
        Click to open csmarks
      </a>
    </div>
  );
};

// istanbul ignore next
export async function getServerSideProps() {
  return {
    props: {
      keywords:
        'csmarks, uwa csmarks, csse csmarks, University of Western Australia, csse, uwa, uws cs, computer science, cits, csse marks',
      description:
        "University of Western Australia, csse csmarks page redirect button. Since the homepage doesn't exists, this what we all use instead.",
    },
  };
}

export default Index;
