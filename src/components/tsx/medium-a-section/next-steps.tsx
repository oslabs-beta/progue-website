import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="flex max-md:flex-col items-center justify-between overflow-x-auto">
      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-primary m-8">
        <div class="card-body">
          <h2 class="card-title text-primary">Secure</h2>
          <p class="text-slate-700 font-normal">
            kafkaPRAAG uses NextAuth's server-only JWT authentication for
            tab-synced, auto-revalidated access to your Kafka metrics.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              <a href="https://next-auth.js.org/" target="_blank">
                Discover NextAuth
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-secondary m-8">
        <div class="card-body">
          <h2 class="card-title text-secondary">Reliable</h2>
          <p class="text-slate-700 font-normal">
            Employing Jolokia as a JMX-HTTP bridge, kafkaPRAAG uses a REST-like
            protocol to fetch data from an mBeanServer backend.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary">
              <a href="https://jolokia.org/" target="_blank">
                Learn Jolokia
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-accent m-8">
        <div class="card-body">
          <h2 class="card-title text-accent">Versatile</h2>
          <p class="text-slate-700 font-normal">
            Through Docker containerization, kafkaPRAAG can be used on macOS,
            Windows, or Linux - and with any Kafka cluster.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-accent">
              <a href="https://www.docker.com/get-started/" target="_blank">
                Get Docker
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-primary m-8">
        <div class="card-body">
          <h2 class="card-title text-primary">Future-friendly</h2>
          <p class="text-slate-700 font-normal">
            Built on Next.js 13, kafkaPRAAG utilizes server-side rendering to
            deliver fast, constant re-render of your data in real.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              <a href="https://nextjs.org/" target="_blank">
                Check out Next.js
              </a>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});
