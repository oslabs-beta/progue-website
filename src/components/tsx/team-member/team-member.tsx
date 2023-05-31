import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a>
      <div class="container">
          <span>person name</span>
          <span>person bio</span>
          <span>person email</span>
          <span>person photo</span>
          <span>person linkedin</span>
      </div>
    </a>
  );
});
