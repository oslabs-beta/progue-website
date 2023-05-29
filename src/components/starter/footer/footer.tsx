import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
          <span>© 2023 kafkaPRAAG team. All Rights Reserved.</span>
        </a>
      </div>
    </footer>
  );
});
