<template>
  <fwb-accordion always-open class="p-10">
    <fwb-accordion-panel>
      <fwb-accordion-header>Games</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-white">
            You have this acorrdion for view toy games you've been played, an then the other two
            options with your victories and your lost games
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="/docs/getting-started/introduction/"
              >get started</a
            >
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>another header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2">
            Flowbite is first conceptualized and designed using the Figma software so everything you
            see in the library has a design equivalent in our Figma file.
          </p>
          <p class="">
            Check out the
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="https://flowbite.com/figma/"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2">
            Flowbite is first conceptualized and designed using the Figma software so everything you
            see in the library has a design equivalent in our Figma file.
          </p>
          <p class="">
            Check out the
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="https://flowbite.com/figma/"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup lang="ts">
// tengo 2 variables que estan cambiando
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel
} from 'flowbite-vue'
</script>
