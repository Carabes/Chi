<template lang="pug">
  <ComponentExample title="Sizes" id="sizes_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Phone input supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, and <code>xl</code>.
    div(style="max-width: 18rem;" slot="example")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-xs") xs
        chi-phone-input(id="phone-input-xs" size="xs")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-sm") sm
        chi-phone-input(id="phone-input-sm" size="sm")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-md") md
        chi-phone-input(id="phone-input-md" size="md")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-lg") lg
        chi-phone-input(id="phone-input-lg" size="lg")
      .chi-form__item
        chi-label(for="phone-input-xl") xl
        chi-phone-input(id="phone-input-xl" size="xl")
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
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- xs -->
<chi-label for="phone-input-xs">xs</chi-label>
<chi-phone-input id="phone-input-xs" size="xs"></chi-phone-input>    
<!-- sm -->
<chi-label for="phone-input-sm">sm</chi-label>
<chi-phone-input id="phone-input-sm" size="sm"></chi-phone-input>    
<!-- md -->
<chi-label for="phone-input-md">md</chi-label>
<chi-phone-input id="phone-input-md" size="md"></chi-phone-input>
<!-- lg -->
<chi-label for="phone-input-lg">lg</chi-label>
<chi-phone-input id="phone-input-lg" size="lg"></chi-phone-input>
<!-- xl -->
<chi-label for="phone-input-xl">xl</chi-label>
<chi-phone-input id="phone-input-xl" size="xl"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class SizesLumenCenturyLink extends Vue {}
</script>
