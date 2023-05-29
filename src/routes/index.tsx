import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/tsx-components/hero/hero';
import Infobox from '~/components/tsx-components/infobox/infobox';
import Starter from '~/components/tsx-components/medium-a-section/next-steps';

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />


      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            More info
          </div>
          <>
            <p>
              <code>tbd</code>
              <br />
              Allows us to add tutorial
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example
            </div>
            <p>
              Here's another example!
            </p>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Contact
            </div>
            <ul>
              <li>
                <span>Open issues, contribute, and star us on </span>
                <a href="https://github.com/oslabs-beta/progue-for-kafka" target="_blank">
                  Github
                </a>
              </li>

              <li>
                <span>Read about us on </span>
                <a href="https://medium.com/" target="_blank">
                  Medium 
                </a>
              </li>

              <li>
                <span>This site was built using Qwik. </span>
                <a href="https://qwik.builder.io/" target="_blank">
                  Learn more about Qwik here!
                </a>
              </li>


            </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'kafkaPRAAG: a visualization tool for Apache Kafka',
  meta: [
    {
      name: 'description',
      content: 'A visualizaton tool for Apache Kafka.',
    },
  ],
};
