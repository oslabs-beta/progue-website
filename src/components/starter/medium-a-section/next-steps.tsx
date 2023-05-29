import { component$ } from '@builder.io/qwik';
import styles from './medium-a-section.module.css';

export default component$(() => {
  return (
    <div class="container container-purple container-center">
      <h2>
        Want to
        <br />
        <span class="highlight">learn more</span>?
      </h2>
        <button class="button-dark" onClick$={() => (console.log("link goes here"))}>
          Read about us on Medium.
        </button>
    </div>
  );
});
