import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
    <article class={['container', styles.intro]}>
      <div class={['container', styles.article]}>
      <h1>Smth smth smth.</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil assumenda cum fuga eos ea rem est aperiam reiciendis commodi velit modi earum dicta facilis voluptas maxime, quidem laboriosam dignissimos ex?</p>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil assumenda cum fuga eos ea rem est aperiam reiciendis commodi velit modi earum dicta facilis voluptas maxime, quidem laboriosam dignissimos ex?</p>

      <button>
        <a href="/docs">
          Download
        </a>
      </button>
      <button>
        <a href="/docs">
          Quick start guide
        </a>
      </button>
      </div>
    <div class={['container', styles.imgbox]}>img here</div>
    </article>
    </div>
  );
});