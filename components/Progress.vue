<script setup>
const props = defineProps({
  progressValue: {
    type: Number,
    default: 0,
  },
});

const width = computed(() =>
  props.progressValue > 1
    ? props.progressValue / 100
    : props.progressValue * 100
);
</script>

<template>
  <div class="max-w-[165px] w-[100%]">
    <div class="flex justify-between">
      <div>
        <span class="text-[#888888] text-[10px]">Human</span>
      </div>
      <div class="text-right">
        <span class="text-[#888888] text-[10px]">Bot</span>
      </div>
    </div>
    <div
      class="relative overflow-hidden ml-[12px] max-w-[155px] w-[100%] bg-[#F5F5F5] rounded-[16px] h-[8px]"
    >
      <div
        class="absolute top-0 left-0 h-[100%] bg-[#00D7E4]"
        :style="{ width: `${width}%` }"
      ></div>
    </div>
  </div>
</template>
