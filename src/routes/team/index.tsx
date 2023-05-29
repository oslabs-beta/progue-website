import type { DocumentHead } from '@builder.io/qwik-city';
import { component$, 
  // useSignal, 
  // useTask$, 
  useStylesScoped$, } from '@builder.io/qwik';
// import {
//   routeLoader$,
//   routeAction$,
//   server$,
// } from '@builder.io/qwik-city';
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="section bright">
      <p>Meet The Team</p>
      team goes here
    </section>
  );
});

export const head: DocumentHead = {
  title: 'kafkaPRAAG Team',
  meta: [
    {
      name: 'description',
      content: 'A visualizaton tool for Apache Kafka.',
    },
  ],
};
