import { component$, Slot } from "@builder.io/qwik";

import Header from "~/components/tsx/header/header";
import Footer from "~/components/tsx/footer/footer";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
