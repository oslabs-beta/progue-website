import type { DocumentHead } from '@builder.io/qwik-city';
import Infobox from '~/components/tsx/infobox/infobox';
import { component$} from '@builder.io/qwik';

export default component$(() => {
  return (
    <section>
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
