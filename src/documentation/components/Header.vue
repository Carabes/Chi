<template lang="pug">
  header.chi-header.docs-header.-z--20
    #version-check.-w--100
    style(type='text/css').
      .theme-lumen a.theme-trigger-lumen.chi-dropdown__menu-item,
      .theme-portal a.theme-trigger-portal.chi-dropdown__menu-item,
      .theme-centurylink a.theme-trigger-centurylink.chi-dropdown__menu-item {
        background-color: #e6f0ff;
        color: #0047bb;
        font-weight: 600;
      }
      .-lumen--show,
      .-centurylink--show,
      .-portal--show {
        display: block;
      }
      .-lumen--hide,
      .-centurylink--hide,
      .-portal--hide {
        display: none;
      }
      .theme-centurylink .-lumen--show,
      .theme-centurylink .-portal--show,
      .theme-centurylink .-centurylink--hide {
        display: none;
      }
      .theme-lumen .-portal--show,
      .theme-lumen .-centurylink--show,
      .theme-lumen .-lumen--hide {
        display: none;
      }
      .theme-portal .-lumen--show,
      .theme-portal .-centurylink--show,
      .theme-portal .-portal--hide {
        display: none;
      }
      .theme-portal .-lumen--hide,
      .theme-portal .-centurylink--hide,
      .theme-centurylink .-portal--hide,
      .theme-centurylink .-lumen--hide,
      .theme-lumen .-portal--hide,
      .theme-lumen .-centurylink--hide {
        display: block;
      }
      .chi-brand {
        margin: 0;
      }
      @media only screen and (min-width: 992px) {
        .chi .docs-header__logo .chi-brand {
          margin: 0 3rem 0 0;
        }
      }
      .chi .docs-header__logo .chi-brand.-centurylink {
        width: 6.09375rem;
      }
      @media only screen and (min-width: 768px) {
        .chi .docs-header__logo .chi-brand.-centurylink {
          margin: 0 3rem 0 0;
          width: 9.75rem;
        }
      }
      .chi .docs-header__logo .chi-brand.-centurylink > img,
      .chi .docs-header__logo .chi-brand.-centurylink > svg {
        height: 1.25rem;
        width: 6.09375rem;
      }
      @media only screen and (min-width: 768px) {
        .chi .docs-header__logo .chi-brand.-centurylink > img,
        .chi .docs-header__logo .chi-brand.-centurylink > svg {
          height: 2rem;
          width: 9.75rem;
        }
      }
      .chi .docs-header__logo .chi-brand.-lumen {
        width: 7.1875rem;
      }
      @media only screen and (min-width: 768px) {
        .chi .docs-header__logo .chi-brand.-lumen {
          margin: 0 1rem 0 0;
          width: 8.75rem;
        }
      }
      @media only screen and (min-width: 992px) {
        .chi .docs-header__logo .chi-brand.-lumen {
          margin: 0 3rem 0 0;
        }
      }
      .chi .docs-header__logo .chi-brand.-lumen > img,
      .chi .docs-header__logo .chi-brand.-lumen > svg {
        height: 1rem;
        width: 7.1875rem;
      }
      @media only screen and (min-width: 768px) {
        .chi .docs-header__logo .chi-brand.-lumen > img,
        .chi .docs-header__logo .chi-brand.-lumen > svg {
          height: 1.25rem;
          width: 8.75rem;
        }
      }
      .chi.theme-portal .docs-header .chi-header__content .chi-header__start .-chi-search .chi-input {
        height: 2.5rem !important;
      }
      .chi.theme-portal .docs-header .chi-header__content .chi-header__start .-chi-search .chi-icon {
        color: #0262b9;
        font-size: 1.25rem;
        height: 1.25rem;
        line-height: 1.25rem;
        top: 0.625rem;
        width: 1.25rem;
      }
      .chi.theme-portal .example .example-tabs .chi-tabs {
        height: 3rem;
      }
      .chi.theme-portal .example .example-tabs .chi-tabs > li > a {
        line-height: 1.5rem;
        padding: 0.75rem 0;
      }
      .chi.theme-portal .example .example-tabs .chi-tabs > li.-active > a {
        padding-bottom: 0.625rem;
      }
    nav.chi-header__content
      #header-brand.chi-header__brand
        button#drawer-trigger-1.chi-button.-icon.-flat.-mr-md--2.-d--flex.-d-lg--none.chi-drawer__trigger(
          data-target='#drawer-sidenav',
          aria-label='Toggle documentation navigation'
        )
          .chi-button__content
            i.chi-icon.-sm--2.icon-menu(aria-hidden='true')
        <NuxtLink class="docs-header__logo" aria-label='Portal' to="/">
          chi-brand#header-logo(logo='lumen')
        </NuxtLink>
        span.chi-header__title.-d--none.-d-lg--flex Chi Design System
      .chi-header__start
        form.-chi-search
          .chi-input__wrapper.-icon--right.-flex--grow1
            label.chi-label.-d--none(for='chi-docs-search') Search Chi documentation
            span.algolia-autocomplete(
              style='position: relative; display: inline-block; direction: ltr'
            )
              input#chi-docs-search.chi-input.searchbox.ds-input(
                type='text',
                placeholder='Search',
                autocomplete='off',
                spellcheck='false',
                role='combobox',
                aria-autocomplete='list',
                aria-expanded='false',
                aria-label='search input',
                aria-owns='algolia-autocomplete-listbox-0',
                dir='auto',
                style='position: relative; vertical-align: top'
              )
              pre(
                aria-hidden='true',
                style='position: absolute; visibility: hidden; white-space: pre; font-family: Inter, Arial, Helvetica, Verdana, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none'
              ).

              span#algolia-autocomplete-listbox-0.ds-dropdown-menu(
                role='listbox',
                style='position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto'
              )
                .ds-dataset-1
            i.chi-icon.icon-search(aria-hidden='true')
      .chi-header__end
        .chi-dropdown
          button#version-dropdown.chi-button.-flat.-px--1.chi-dropdown__trigger.-animate(
            data-position='bottom-end',
            aria-label='Toggle Chi version'
          ) v5.7.0
          #versionDropdown.chi-dropdown__menu(
            style='width: 10rem; position: absolute; will-change: transform; right: initial; top: 0px; left: initial; transform: translate3d(76px, 40px, 0px)',
            x-placement='bottom-end'
          )
            a.chi-dropdown__menu-item.-active(
              href='https://assets.ctl.io/chi/5.7.0'
            ) v5.7.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.6.0') v5.6.0       
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.5.0') v5.5.0       
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.4.0') v5.4.0       
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.3.1') v5.3.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.3.0') v5.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.2.0') v5.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.1.0') v5.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.0.0') v5.0.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.4.0') v4.4.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.3.0') v4.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.2.0') v4.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.1.2') v4.1.2
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.1.1') v4.1.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.1.0') v4.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.0.0') v4.0.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.17.0') v3.17.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.16.0') v3.16.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.15.0') v3.15.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.14.0') v3.14.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.13.0') v3.13.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.12.0') v3.12.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.11.0') v3.11.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.10.0') v3.10.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.9.0') v3.9.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.8.0') v3.8.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.7.0') v3.7.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.6.0') v3.6.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.5.0') v3.5.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.4.0') v3.4.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.3.0') v3.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.2.0') v3.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.1.1') v3.1.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.1.0') v3.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.0.0') v3.0.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.6.0') v2.6.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.5.1') v2.5.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.5.0') v2.5.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.4.1') v2.4.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.4.0') v2.4.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.3.0') v2.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.2.0') v2.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.1.0') v2.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.0.0') v2.0.0
        .chi-dropdown
          button#support.chi-button.-flat.-px--1.-ml--1.chi-dropdown__trigger.-animate(
            data-position='bottom-end'
          ) Support
          .chi-dropdown__menu(
            style='width: 14rem; position: absolute; will-change: transform; right: initial; top: 0px; left: initial; transform: translate3d(100px, 40px, 0px)',
            x-placement='bottom-end'
          )
            a#contact.chi-dropdown__menu-item(
              href='mailto:chi.support@centurylink.com'
            ) Email Support
            a#teams.chi-dropdown__menu-item(
              href='https://teams.microsoft.com/l/channel/19%253aa08fdfde482543ea80f81ce484cea21b%2540thread.skype/CHI?groupId=8631295d-43fc-4e40-93e5-dc8c9ab4d127&tenantId=72b17115-9915-42c0-9f1b-4f98e5a4bcd2',
              target='_blank',
              rel='noopener'
            ) Talk #Chi on Microsoft Teams
        a#github-button.chi-button.-icon.-flat.-ml--1(
          href='https://github.com/CenturyLink/Chi',
          rel='noopener',
          aria-label='GitHub',
          data-tooltip='GitHub',
          aria-describedby='chi-tooltip-1'
        )
          .chi-button__content
            i.chi-icon.icon-logo-github(aria-hidden='true')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

Vue.config.ignoredElements = ['chi-brand'];
@Component
export default class Header extends Vue {
  mounted() {}
}
</script>

<style scoped lang="scss"></style>
