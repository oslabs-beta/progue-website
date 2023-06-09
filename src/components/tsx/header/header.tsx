import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <a href="/">
          <Image
            src="https://elasticbeanstalk-us-east-1-506029946825.s3.amazonaws.com/kafkaPRAAG-logo-transparent.png"
            // @ts-ignore
            onerror="this.onerror=null; this.src='https://elasticbeanstalk-us-east-1-506029946825.s3.amazonaws.com/kafkaPRAAG-logo-transparent.png'"
            width={300}
            height={20}
            alt="image of kafka logo"
            class="m-8"
          />
        </a>
        <ul class="text-slate-500 font-normal">
          <li>
            <a href="/">Home</a>
          </li>
          <li class="font-light">
            <a href="/docs">Docs</a>
          </li>
          <li class="font-light">
            <a href="/team">Team</a>
          </li>
        </ul>
      </div>
    </header>
  );
});
