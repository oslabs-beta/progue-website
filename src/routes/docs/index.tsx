import type { DocumentHead } from "@builder.io/qwik-city";
import Infobox from "~/components/tsx/infobox/infobox";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="">
      <div class="flex justify-center">
        <Infobox>
          <h1 class="text-5xl font-bold mt-6 ml-4 mb-8">Get started</h1>
          <>
            <p>
              <code>npm install something</code>
              <br />
              Allows us to add tutorial
            </p>
            <p>
              <code>npm install something</code>
              <br />
              Allows us to add tutorial
            </p>
            <p>
              <code>npm install something</code>
              <br />
              Allows us to add tutorial
            </p>
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
  title: "kafkaPRAAG Documentation",
  meta: [
    {
      name: "description",
      content: "A visualizaton tool for Apache Kafka."
    }
  ]
};
