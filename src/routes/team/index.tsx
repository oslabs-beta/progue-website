import type { DocumentHead } from '@builder.io/qwik-city';
import { component$, } from '@builder.io/qwik';
import TeamMember from '~/components/tsx/team-member/team-member';


export default component$(() => {
  return (
    <section>
      <p>Meet The Team</p>
      team goes here
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
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
