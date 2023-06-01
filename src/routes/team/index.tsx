import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import TeamMember from "~/components/tsx/team-member/team-member";

export default component$(() => {
  return (
    <section>
      <p>Meet The Team</p>
      <div class="flex flex-col sm:grid sm:grid-cols-2">
        <TeamMember
          bio="bio goes here"
          github="https://github.com/ckim722"
          linkedIn="https://www.linkedin.com/in/catkim722/"
          name="Cat Kim"
        />
        <TeamMember
          bio="bio goes here"
          github="https://github.com/sherrii"
          linkedIn="https://www.linkedin.com/in/sherryl2523/"
          name="Sherry Lu"
        />
        <TeamMember
          bio="bio goes here"
          github="https://github.com/hankfontaine/"
          linkedIn="https://www.linkedin.com/in/hank-mcgill/"
          name="Hank McGill"
        />
        <TeamMember
          bio="bio goes here"
          github="https://github.com/camina-drummer"
          linkedIn="https://www.linkedin.com/in/wurichard/"
          name="Richard Wu"
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
