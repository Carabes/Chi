<template lang="pug">
  - var example=0;
  - var menuItems=['1', '2', '3', '4'];
  - var drawerMenuItems=['1', '2'];
  -
    var active = {
      menuItem: '1',
      drawerMenuItem: '2'
    };

  <ComponentExample title="Interaction" id="interaction" padding="-p--0" :tabs="exampleTabs">
    .-mb--3.-overflow--hidden(slot="example")
      .-position--relative.-z--0.-overflow--hidden(style='height:25rem;')
        .-p--3
          .-d--flex.-align-items--center
            button.chi-button.-icon.-flat#mobile-navigation-interaction-trigger(ref="trigger" data-target="#mobile-navigation-example" aria-label="Open Menu")
              .chi-button__content
                i.chi-icon.icon-menu.-sm--2(aria-hidden="true")
            b.-ml--2 Click menu button to open Mobile navigation
          each i in [1, 2]
            p.-text.-mb--3 
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. 
              | Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum 
              | dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus 
              | convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae 
              | lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. 
              | Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. 
              | Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.
        .chi-mobile-nav#mobile-navigation-example
          .chi-backdrop.-closed.-position--absolute
            .chi-backdrop__wrapper
              .chi-drawer.-left.-animated.chi-mobile-nav__first-level.-position--absolute
                .-position--relative
                  .chi-mobile-nav__first-level-content.-w--100
                    .chi-drawer__header.chi-mobile-nav__header
                      button.chi-button.-flat.chi-dropdown__trigger.-animate.-no-hover.-b--transparent(id="button-site-menu2", data-target="dropdown-2-menu") Control Center
                      button.chi-button.-icon.-close(aria-label='Close')
                        .chi-button__content
                          i.chi-icon.icon-x(aria-hidden="true")
                    .chi-mobile-nav__dropdown
                      .chi-dropdown__menu.-list.chi-mobile-nav__dropdown-content#dropdown-2-menu
                        a.chi-dropdown__menu-item.-h--auto.-active(href="#")
                          span.chi-dropdown__menu-item_title App name
                          span.chi-dropdown__menu-item_text App description
                        a.chi-dropdown__menu-item.-h--auto(href="#")
                          span.chi-dropdown__menu-item_title App name 2
                          span.chi-dropdown__menu-item_text App description
                        a.chi-dropdown__menu-item.-h--auto(href="#")
                          span.chi-dropdown__menu-item_title App name 3
                          span.chi-dropdown__menu-item_text App description
                    .chi-drawer__content.chi-mobile-nav__content
                      .chi-mobile-nav__user
                        .chi-mobile-nav__user-name
                          span Alessandro Ray
                        button.chi-button.-flat.chi-dropdown__trigger.-px--1.-animate.-no-hover.-b--transparent.-text--normal(id="button-user-menu2", data-target="dropdown-3-menu") Menu
                      .chi-mobile-nav__dropdown
                        .chi-dropdown__menu.chi-mobile-nav__dropdown-content#dropdown-3-menu
                          a.chi-dropdown__menu-item(href="#")
                            i.chi-icon.icon-user(aria-hidden="true")
                            span Item 1
                          a.chi-dropdown__menu-item(href="#")
                            i.chi-icon.icon-logout(aria-hidden="true")
                            span Item 2
                      ul.chi-tabs.-vertical.-icons
                        li.-active
                          a(href='#second-level-1')
                            i.chi-icon.icon-atom(aria-hidden="true")
                            span Toggle me
                        li
                          a(href='#second-level-2')
                            i.chi-icon.icon-atom(aria-hidden="true")
                            span Toggle me
                        li
                          a(href='#tab-link')
                            i.chi-icon.icon-atom(aria-hidden="true")
                            span Tab link
                        li
                          a(href='#tab-link')
                            i.chi-icon.icon-atom(aria-hidden="true")
                            span Tab link
                      .chi-divider
                      ul.chi-tabs.-vertical.-icons
                        li
                          a.-text--primary(href='#tab-link')
                            i.chi-icon.icon-user(aria-hidden="true")
                            span My Profile
                        li
                          a.-text--primary(href='#tab-link')
                            i.chi-icon.icon-bell-settings-outline(aria-hidden="true")
                            span Notification Settings
                        li
                          a.-text--primary(href='#tab-link')
                            i.chi-icon.icon-logout(aria-hidden="true")
                            span Sign Out
                .chi-mobile-nav__drawers
                  each drawerNumber in [1, 2]
                    .chi-drawer.-right.-position--absolute(id=`second-level-${drawerNumber}`)
                      .chi-drawer__header.chi-mobile-nav__header
                        button.chi-button.-flat.-icon.-no-hover.-back(aria-label='Back')
                          .chi-button__content
                            i.chi-icon.icon-chevron-left(aria-hidden="true")
                        .chi-mobile-nav__header-title Inventory
                        button.chi-button.-icon.-close(aria-label='Close')
                          .chi-button__content
                            i.chi-icon.icon-x(aria-hidden="true")
                      .chi-drawer__content.chi-mobile-nav__content
                        .chi-accordion
                          each item, index in drawerMenuItems
                            .chi-accordion__item(class=`${drawerNumber === 1 && item === active.drawerMenuItem ? '-active -expanded' : ''}`)
                              button.chi-accordion__trigger
                                .chi-accordion__title=`Item ${item}`
                                i.chi-icon.icon-chevron-down(aria-hidden="true")
                              .chi-accordion__content
                                .chi-accordion
                                  each item2, index in drawerMenuItems
                                    .chi-accordion__item(class=`${drawerNumber === 1 && item === active.drawerMenuItem && item2 === active.drawerMenuItem ? '-active -expanded' : ''}`)
                                      button.chi-accordion__trigger
                                        .chi-accordion__title=`Item ${item}.${item2}`
                                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                                      .chi-accordion__content
                                        each item3 in drawerMenuItems
                                          a(href=`#exampleHashTarget` class=`${drawerNumber === 1 && item === active.drawerMenuItem && item2 === active.drawerMenuItem && item3 === active.drawerMenuItem ? '-active' : ''}`)
                                            span
                                              =`Item ${item}.${item2}.${item3}`
                          a(href=`#exampleHashTarget`)
                            span
                              | External
                              i.chi-icon.icon-external-link.-xs(aria-hidden="true")
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
        htmlblueprint: `<!-- Trigger -->
<button class="chi-button -icon -flat" id="mobile-navigation-interaction-trigger" data-target="#mobile-navigation-example" aria-label="Open Menu">
  <div class="chi-button__content">
    <i class="chi-icon icon-menu -sm--2" aria-hidden="true"></i>
  </div>
</button>

<!-- Mobile Navigation -->
<div class="chi-mobile-nav" id="mobile-navigation-example">
  <div class="chi-backdrop -closed -position--absolute -animated">
    <div class="chi-backdrop__wrapper">
      <div class="chi-drawer -left -animated chi-mobile-nav__first-level -position--absolute">
        <div class="-position--relative">
          <div class="chi-mobile-nav__first-level-content -w--100">
            <div class="chi-drawer__header chi-mobile-nav__header">
              <button
                class="chi-button -flat chi-dropdown__trigger -animate -no-hover -b--transparent"
                id="button-site-menu2"
                data-target="dropdown-2-menu"
              >
                Control Center
              </button>
              <button class="chi-button -icon -close" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-mobile-nav__dropdown">
              <div
                class="chi-dropdown__menu -list chi-mobile-nav__dropdown-content"
                id="dropdown-2-menu"
              >
                <a class="chi-dropdown__menu-item -h--auto -active" href="#">
                  <span class="chi-dropdown__menu-item_title">App name</span>
                  <span class="chi-dropdown__menu-item_text">
                    App description
                  </span>
                </a>
                <a class="chi-dropdown__menu-item -h--auto" href="#">
                  <span class="chi-dropdown__menu-item_title">App name 2</span>
                  <span class="chi-dropdown__menu-item_text">
                    App description
                  </span>
                </a>
                <a class="chi-dropdown__menu-item -h--auto" href="#">
                  <span class="chi-dropdown__menu-item_title">App name 3</span>
                  <span class="chi-dropdown__menu-item_text">
                    App description
                  </span>
                </a>
              </div>
            </div>
            <div class="chi-drawer__content chi-mobile-nav__content">
              <div class="chi-mobile-nav__user">
                <div class="chi-mobile-nav__user-name">
                  <span>Alessandro Ray</span>
                </div>
                <button
                  class="chi-button -flat chi-dropdown__trigger -px--1 -animate -no-hover -b--transparent -text--normal"
                  id="button-user-menu2"
                  data-target="dropdown-3-menu"
                >
                  Menu
                </button>
              </div>
              <div class="chi-mobile-nav__dropdown">
                <div
                  class="chi-dropdown__menu chi-mobile-nav__dropdown-content"
                  id="dropdown-3-menu"
                >
                  <a class="chi-dropdown__menu-item" href="#">
                    <i class="chi-icon icon-user" aria-hidden="true"></i>
                    <span>Item 1</span>
                  </a>
                  <a class="chi-dropdown__menu-item" href="#">
                    <i class="chi-icon icon-logout" aria-hidden="true"></i>
                    <span>Item 2</span>
                  </a>
                </div>
              </div>
              <ul class="chi-tabs -vertical -icons">
                <li class="-active">
                  <a
                    href="#second-level-1"
                    class=" chi-drawer__subitem-list-trigger"
                  >
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Toggle me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#second-level-2"
                    class=" chi-drawer__subitem-list-trigger"
                  >
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Toggle me</span>
                  </a>
                </li>
                <li>
                  <a href="#tab-link">
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Tab link</span>
                  </a>
                </li>
                <li>
                  <a href="#tab-link">
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Tab link</span>
                  </a>
                </li>
              </ul>
              <div class="chi-divider"></div>
              <ul class="chi-tabs -vertical -icons">
                <li>
                  <a class="-text--primary" href="#tab-link">
                    <i class="chi-icon icon-user" aria-hidden="true"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <a class="-text--primary" href="#tab-link">
                    <i
                      class="chi-icon icon-bell-settings-outline"
                      aria-hidden="true"
                    ></i>
                    <span>Notification Settings</span>
                  </a>
                </li>
                <li>
                  <a class="-text--primary" href="#tab-link">
                    <i class="chi-icon icon-logout" aria-hidden="true"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="chi-mobile-nav__drawers">
          <div
            class="chi-drawer -right -position--absolute"
            id="second-level-1"
          >
            <div class="chi-drawer__header chi-mobile-nav__header">
              <button
                class="chi-button -flat -icon -no-hover -back"
                aria-label="Back"
              >
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                </div>
              </button>
              <div class="chi-mobile-nav__header-title">Inventory</div>
              <button class="chi-button -icon -close" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-drawer__content chi-mobile-nav__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <div class="chi-accordion">
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 1.1</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 1.1.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 1.1.2</span>
                          </a>
                        </div>
                      </div>
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 1.2</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 1.2.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 1.2.2</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chi-accordion__item -active -expanded">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <div class="chi-accordion">
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 2.1</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 2.1.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 2.1.2</span>
                          </a>
                        </div>
                      </div>
                      <div class="chi-accordion__item -active -expanded">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 2.2</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 2.2.1</span>
                          </a>
                          <a class="-active" href="#exampleHashTarget">
                            <span>Item 2.2.2</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#exampleHashTarget">
                  <span>
                    External
                    <i
                      class="chi-icon icon-external-link -xs"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="chi-drawer -right -position--absolute"
            id="second-level-2"
          >
            <div class="chi-drawer__header chi-mobile-nav__header">
              <button
                class="chi-button -flat -icon -no-hover -back"
                aria-label="Back"
              >
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                </div>
              </button>
              <div class="chi-mobile-nav__header-title">Inventory</div>
              <button class="chi-button -icon -close" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-drawer__content chi-mobile-nav__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <div class="chi-accordion">
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 1.1</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 1.1.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 1.1.2</span>
                          </a>
                        </div>
                      </div>
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 1.2</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 1.2.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 1.2.2</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <div class="chi-accordion">
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 2.1</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 2.1.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 2.1.2</span>
                          </a>
                        </div>
                      </div>
                      <div class="chi-accordion__item">
                        <button class="chi-accordion__trigger">
                          <div class="chi-accordion__title">Item 2.2</div>
                          <i
                            class="chi-icon icon-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div class="chi-accordion__content">
                          <a href="#exampleHashTarget">
                            <span>Item 2.2.1</span>
                          </a>
                          <a href="#exampleHashTarget">
                            <span>Item 2.2.2</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#exampleHashTarget">
                  <span>
                    External
                    <i
                      class="chi-icon icon-external-link -xs"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>
  chi.mobilenav(document.querySelector("#mobile-navigation-interaction-trigger"));
<\/script>`
      }
    };
  }
})
export default class Interaction extends Vue {
  mounted() {
    chi.mobilenav(
      document.querySelector('#mobile-navigation-interaction-trigger')
    );
  }
}
</script>
