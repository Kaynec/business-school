<script lang="ts" setup>
import { injectionKeyIsVerticalNavHovered, useLayouts } from "@layouts";
import {
  VerticalNavGroup,
  VerticalNavLink,
  VerticalNavSectionTitle,
} from "@layouts/components";
import { config } from "@layouts/config";
import type {
  NavGroup,
  NavLink,
  NavSectionTitle,
  VerticalNavItems,
} from "@layouts/types";
import type { Component } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VNodeRenderer } from "./VNodeRenderer";

interface Props {
  tag?: string | Component;
  navItems: VerticalNavItems;
  isOverlayNavActive: boolean;
  toggleIsOverlayNavActive: (value: boolean) => void;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "aside",
});

const refNav = ref();

const { width: windowWidth } = useWindowSize();

const isHovered = useElementHover(refNav);

provide(injectionKeyIsVerticalNavHovered, isHovered);

const {
  isVerticalNavCollapsed: isCollapsed,
  isLessThanOverlayNavBreakpoint,
  isVerticalNavMini,
  isAppRtl,
} = useLayouts();

const hideTitleAndIcon = isVerticalNavMini(windowWidth, isHovered);

const resolveNavItemComponent = (
  item: NavLink | NavSectionTitle | NavGroup
) => {
  if ("heading" in item) return VerticalNavSectionTitle;
  if ("children" in item) return VerticalNavGroup;

  return VerticalNavLink;
};

/*
  ℹ️ Close overlay side when route is changed
  Close overlay vertical nav when link is clicked
*/
const route = useRoute();

watch(
  () => route.name,
  () => {
    props.toggleIsOverlayNavActive(false);
  }
);

const isVerticalNavScrolled = ref(false);
const updateIsVerticalNavScrolled = (val: boolean) =>
  (isVerticalNavScrolled.value = val);

const handleNavScroll = (evt: Event) => {
  isVerticalNavScrolled.value = (evt.target as HTMLElement).scrollTop > 0;
};
</script>

<template>
  <Component
    :is="props.tag"
    ref="refNav"
    class="layout-vertical-nav"
    :class="[
      {
        'overlay-nav': isLessThanOverlayNavBreakpoint(windowWidth),
        hovered: isHovered,
        visible: isOverlayNavActive,
        scrolled: isVerticalNavScrolled,
      },
    ]"
  >
    <!-- 👉 Header -->

    <slot
      name="nav-items"
      :update-is-vertical-nav-scrolled="updateIsVerticalNavScrolled"
    >
      <div class="nav-header">
        <slot name="nav-header ">
          <RouterLink
            to="/"
            class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
          >
            <VNodeRenderer
              v-if="isCollapsed && !isHovered"
              :nodes="config.app.smLogo"
              class="max-w-10"
            />
            <VNodeRenderer v-else :nodes="config.app.logo" />

            <Transition name="vertical-nav-app-title"> </Transition>
          </RouterLink>
          <!-- 👉 Vertical nav actions -->
          <!-- Show toggle collapsible in >md and close button in <md -->
          <template v-if="!isLessThanOverlayNavBreakpoint(windowWidth)">
            <Component
              :is="config.app.iconRenderer || 'div'"
              v-show="isCollapsed && !hideTitleAndIcon"
              class="header-action"
              v-bind="config.icons.verticalNavUnPinned"
              @click="isCollapsed = !isCollapsed"
            />
            <Component
              :is="config.app.iconRenderer || 'div'"
              v-show="!isCollapsed && !hideTitleAndIcon"
              class="header-action"
              v-bind="config.icons.verticalNavPinned"
              @click="isCollapsed = !isCollapsed"
            />
          </template>
          <template v-else>
            <Component
              :is="config.app.iconRenderer || 'div'"
              class="header-action"
              v-bind="config.icons.close"
              @click="toggleIsOverlayNavActive(false)"
            />
          </template>
        </slot>
      </div>
      <PerfectScrollbar
        :key="isAppRtl"
        tag="ul"
        class="nav-items"
        :options="{ wheelPropagation: false }"
        @ps-scroll-y="handleNavScroll"
      >
        <Component
          :is="resolveNavItemComponent(item)"
          v-for="(item, index) in navItems"
          :key="index"
          :item="item"
          v-auto-animte
        />
        <img
          src="@images/logos/vira-sm.svg"
          alt="sidebar"
          aspect="1"
          max-w-10
          class="mr-3 mt-10 transition-250"
          v-if="isCollapsed && !isHovered"
        />
        <img
          src="@images/logos/sidebar-footer-logo.svg"
          alt="sidebar"
          width="270"
          height="90"
          w="95%"
          class="mr-3 mt-10 transition-250"
          v-else
        />
      </PerfectScrollbar>
    </slot>
  </Component>
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/mixins";

// 👉 Vertical Nav
.layout-vertical-nav {
  position: fixed;
  z-index: variables.$layout-vertical-nav-z-index;
  display: flex;
  flex-direction: column;
  background: url("@/assets/images/svg/background.svg");
  background-size: cover;
  block-size: 100%;
  inline-size: variables.$layout-vertical-nav-width;
  inset: 0;
  min-block-size: 100vh;
  transition: transform 0.25s ease-in-out, inline-size 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out;
  will-change: transform, inline-size;

  .nav-header {
    display: flex;
    align-items: center;

    .header-action {
      cursor: pointer;
    }
  }

  .app-title-wrapper {
    margin-inline-end: auto;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    block-size: 100%;
    gap: 1rem;
    margin-block-start: 3rem;

    // overflow-x: hidden;

    // // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
    // overflow-y: auto;
  }

  .nav-item-title {
    overflow: hidden;
    margin-inline-end: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 👉 Collapsed
  .layout-vertical-nav-collapsed & {
    &:not(.hovered) {
      inline-size: variables.$layout-vertical-nav-collapsed-width;
    }
  }

  // 👉 Overlay nav
  &.overlay-nav {
    &:not(.visible) {
      transform: translateX(-#{variables.$layout-vertical-nav-width});

      @include mixins.rtl {
        transform: translateX(variables.$layout-vertical-nav-width);
      }
    }
  }
}
</style>
