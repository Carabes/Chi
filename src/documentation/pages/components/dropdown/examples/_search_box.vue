<template lang="pug">
  <ComponentExample title="Search box" id="search_box" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    p.-text(slot="example-description")
      | This search box is a special kind of text input prepared to be located on top of the menu-item. It has slightly
      | smaller padding at the sides.
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3(slot="example")
      .chi-dropdown__menu.-active
        .chi-input__wrapper.-icon--right
          input.chi-input.chi-search__input.-sm(type='search' placeholder='Search' aria-label='search input')
          button.chi-button.-icon.-flat.-sm(aria-label='Search')
            .chi-button__content
              i.chi-icon.icon-search(aria-hidden='true')
        a.chi-dropdown__menu-item(href='#exampleLink') Item 1
        a.chi-dropdown__menu-item(href='#exampleLink') Item 2
        a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        a.chi-dropdown__menu-item(href='#exampleLink') Item 4
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
        htmlblueprint: `<div class="chi-dropdown__menu">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -sm" type="search" placeholder="Search" aria-label="search input" />
    <button class="chi-button -icon -flat -sm" aria-label="Search">
      <div class="chi-button__content"><i class="chi-icon icon-search" aria-hidden="true"></i></div>
    </button>
  </div>
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`
      }
    };
  }
})
export default class SearchBox extends Vue {}
</script>
