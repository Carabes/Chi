<template lang="pug">
  <ComponentExample title="Help" id="help" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>chi-label__help</code> to include a help icon that displays helpful information about an input in a popover.
      | A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.
    .chi-form__item(slot="example")
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input" id="checkbox-he1")
        label(for="checkbox-he1" class="chi-checkbox__label") Checkbox
        .chi-label__help
          button.chi-button.-icon.-xs.-flat(id="example__help-button" aria-label="Help" data-target="#example__help-popover")
            i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          section.chi-popover.chi-popover--top(id="example__help-popover" aria-modal="true" role="dialog")
            .chi-popover__content
              p.chi-popover__text
                | Helpful information goes here.
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

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
    <input class="chi-checkbox__input" type="checkbox" id="checkbox-he1">
    <label class="chi-checkbox__label" for="checkbox-he1">Checkbox</label>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example__help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`
      }
    };
  }
})
export default class Help extends Vue {
  mounted() {
    chi.popover(document.getElementById('example__help-button'));
  }
}
</script>
