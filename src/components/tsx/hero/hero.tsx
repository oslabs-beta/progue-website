import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        What is <span class="highlight">kafkaPraag</span>, exactly?
      </h1>
      <p>A monitoring tool for your Kafka cluster.  Get real-time updates and on-the-fly changes to your pubSub model with kafkaPRAAG!</p>
      <div class={styles['button-group']}>
        <a href="https://qwik.builder.io/docs" target="_blank" class="button button-dark">
          Quick start guide
        </a>
      </div>
    </div>
  );
});
