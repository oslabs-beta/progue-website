import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/tsx/hero/hero";
import Starter from "~/components/tsx/medium-a-section/next-steps";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />
    </>
  );
});

export const head: DocumentHead = {
  title: "kafkaPRAAG: a visualization tool for Apache Kafka",
  meta: [
    {
      name: "description",
      content: "A visualizaton tool for Apache Kafka."
    }
  ]
};
