<template lang="pug">
  div
    <TitleBar title="Badge" description="Badges are inline elements used to label, categorize, or organize a list of items." :tabs="pageTabs" />
    .chi-grid__container.-pt--3
      .chi-tabs-panel.-active#examples
        <Examples />
      .chi-tabs-panel#properties
        <Properties />
      .chi-tabs-panel#accessibility
        <Accessibility />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';
import PageContentTabs from '../../../components/PageContentTabs.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '../../../constants/constants';

@Component({
  components: {
    Accessibility,
    Examples,
    PageContentTabs,
    Properties
  },
  data: () => {
    return {
      pageTabs: standardComponentPageTabs
    };
  }
})
export default class Badge extends Vue {
  mounted() {}
}
</script>
