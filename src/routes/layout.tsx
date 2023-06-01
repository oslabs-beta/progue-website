import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import Header from '~/components/tsx/header/header';
import Footer from '~/components/tsx/footer/footer';
// import styles from './styles.css?inline';

export default component$(() => {
  // useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
