<template lang="pug">
  <ComponentExample title="Checkbox and description" id="checkbox-description" :tabs="exampleTabs" padding="-p--4">
    fieldset(slot="example")
      legend.chi-label Legend
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-scd`, id=`unique-id-scd${i}`, checked=(i === 1))
          label(for=`unique-id-scd${i}`)
            .chi-picker__content--start
              div.chi-form__item.-row
                span.chi-picker__checkbox
                span.chi-picker__label
                  = 'Option ' + `${i}`
              div.chi-picker__description
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.
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
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-scd" type="checkbox" id="unique-id-scd1" />
    <label for="unique-id-scd1">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__checkbox"></span>
          <span class="chi-picker__label">Option 1</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-scd" type="checkbox" id="unique-id-scd2" />
    <label for="unique-id-scd2">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__checkbox"></span>
          <span class="chi-picker__label">Option 2</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class CheckboxDescription extends Vue {}
</script>
