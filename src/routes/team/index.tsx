import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import TeamMember from "~/components/tsx/team-member/team-member";

export default component$(() => {
  return (
    <section class="flex flex-col items-center justify-center mb-4">
      <h1 class="text-5xl font-bold mt-6 ml-4 flex flex-col items-center justify-center mb-4">
        Meet the team
      </h1>
      <div class="sm:grid sm:grid-cols-2 justify-items-center">
        <TeamMember
          // @ts-ignore
          github="https://github.com/ckim722"
          linkedIn="https://www.linkedin.com/in/catkim722/"
          name="Cat Kim"
          src="../images/cat.jpg"
          bio="crazy about React"
        />
        <TeamMember
          // @ts-ignore
          github="https://github.com/sherrii"
          linkedIn="https://www.linkedin.com/in/sherryl2523/"
          name="Sherry Lu"
          src="../images/sherry.png"
          bio="software developer"
        />
        <TeamMember
          // @ts-ignore
          github="https://github.com/hankfontaine/"
          linkedIn="https://www.linkedin.com/in/hank-mcgill/"
          name="Hank McGill"
          src="../images/hank.jpg"
          bio="ask me about NextAuth or accessibilty"
        />
        <TeamMember
          // @ts-ignore
          github="https://github.com/camina-drummer"
          linkedIn="https://www.linkedin.com/in/wurichard/"
          name="Richard Wu"
          src="../images/richard.jpg"
          bio="cuckoo for Kafka"
        />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "kafkaPRAAG Team",
  meta: [
    {
      name: "description",
      content: "A visualizaton tool for Apache Kafka."
    }
  ]
};
