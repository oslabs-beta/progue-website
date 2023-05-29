import type { DocumentHead } from '@builder.io/qwik-city';
import Infobox from '~/components/tsx/infobox/infobox';
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
      <p>Documentation</p>
      instructions go here

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            Quick start guide
          </div>
          <>
            <p>
              <code>npm install something</code>
              <br />
              Allows us to add tutorial
            </p>
          </>
        </Infobox>
      </div>


    </section>
  );
});

export const head: DocumentHead = {
  title: 'kafkaPRAAG Documentation',
  meta: [
    {
      name: 'description',
      content: 'A visualizaton tool for Apache Kafka.',
    },
  ],
};
