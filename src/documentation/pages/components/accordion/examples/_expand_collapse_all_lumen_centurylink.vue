<template lang="pug">
  <ComponentExample title="Expand / Collapse all Accordion items" id="expand_collapse_all_lumen_centurylink" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    button(@click="expandAll", slot="example").chi-button#expand-all Expand all
    button(@click="collapseAll", slot="example").chi-button.-ml--1#collapse-all Collapse all
    .chi-accordion.-mt--2#expand-collapse(slot="example")
      .chi-accordion__item.-expanded
        button.chi-accordion__trigger
          i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__title
            | Accordion
        .chi-accordion__content
          .chi-accordion
            .chi-accordion__item
              button.chi-accordion__trigger
                i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__title
                  | Accordion item 1
              .chi-accordion__content
                p.chi-accordion__text Content of Accordion item 1
                .chi-accordion
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion item 1.1
                    .chi-accordion__content
                      p.chi-accordion__text Content of Accordion item 1.1
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion item 1.2
                    .chi-accordion__content
                      p.chi-accordion__text Content of Accordion item 1.2
            .chi-accordion__item
              button.chi-accordion__trigger
                i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__title
                  | Accordion item 2
              .chi-accordion__content
                p.chi-accordion__text Content of Accordion item 2
                .chi-accordion
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion item 2.1
                    .chi-accordion__content
                      p.chi-accordion__text Content of Accordion item 2.1
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion item 2.2
                    .chi-accordion__content
                      p.chi-accordion__text Content of Accordion item 2.2
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
        htmlblueprint: `<button class="chi-button" id="expand-all">Expand all</button>
<button class="chi-button" id="collapse-all">Collapse all</button>

<div class="chi-accordion" id="expand-collapse">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion item 1</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 1.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 1.2</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion item 2</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 2.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 2.2</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const expandCollapseAccordion = chi.accordion(document.getElementById("expand-collapse"));
  const expandAll = document.getElementById("expand-all");
  const collapseAll = document.getElementById("collapse-all");

  expandAll.addEventListener("click", () => {
    expandCollapseAccordion.expandAll();
  });

  collapseAll.addEventListener("click", () => {
    expandCollapseAccordion.collapseAll();
  });
<\/script>`
      }
    };
  }
})
export default class ExpandCollapseAllLumenCenturyLink extends Vue {
  accordion: any;

  expandAll() {
    this.accordion.expandAll();
  }
  collapseAll() {
    this.accordion.collapseAll();
  }
  mounted() {
    const accordionExpandAll = document.getElementById('expand-collapse');

    this.accordion = chi.accordion(accordionExpandAll);
  }
}
</script>
