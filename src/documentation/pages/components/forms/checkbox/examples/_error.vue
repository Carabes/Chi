<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>-danger</code> state to provide feedback to users when an input fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    .chi-form__item(slot="example")
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input" id="checkbox-er1")
        label(for="checkbox-er1" class="chi-checkbox__label -danger")
          | I accept the Terms of Service
          abbr.chi-label__required(title="Required field") *
      .chi-label.-status.-danger Please accept the terms of service.
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-er1">
    <label class="chi-checkbox__label -danger" for="checkbox-er1">
      I accept the Terms of Service
      <abbr class="chi-label__required" title="Required field">*</abbr>
    </label>
  </div>
  <div class="chi-label -status -danger">Please accept the terms of service.</div>
</div>`
      }
    };
  }
})
export default class Error extends Vue {
  mounted() {}
}
</script>
