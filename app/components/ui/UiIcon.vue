<script setup lang="ts">
import type { UiIconProps } from '~/types/components/ui/ui-icons';

const { name } = defineProps<UiIconProps>();
</script>

<template>
  <svg-icon
		:name="name"
	/>
</template>