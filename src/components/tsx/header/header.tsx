import { component$ } from '@builder.io/qwik';
import { PraagLogo } from '../icons/praag';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <PraagLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/docs">
              Docs
            </a>
          </li>
          <li>
            <a href="/team">
              Team
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});