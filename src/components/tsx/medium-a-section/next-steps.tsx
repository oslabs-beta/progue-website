import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="flex max-md:flex-col items-center justify-between">
      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-primary m-8">
        <div class="card-body">
          <h2 class="card-title text-primary">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-secondary m-8">
        <div class="card-body">
          <h2 class="card-title text-secondary">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-accent m-8">
        <div class="card-body">
          <h2 class="card-title text-accent">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="box-border max-md:max-w-xs card w-96 max-md:w-full bg-base-100 shadow-xl border-2 border-primary m-8">
        <div class="card-body">
          <h2 class="card-title text-primary">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </article>
  );
});
