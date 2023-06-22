<script setup>
const props = defineProps({
  profileData: Object,
});
</script>

<template>
  <div
    class="bg-white rounded-[32px] mr-[12px] px-[15px] py-[22px] flex shadow-[0_0_24px_4px_rgb(0,133,255,0.23)]"
  >
    <div class="pr-[17px]">
      <img
        class="mb-[16px] rounded-[50%] w-[88px] h-[88px]"
        :src="props.profileData.picture"
        alt="Joe Biden"
      />

      <button
        class="rounded-[32px] text-[#1494FC] text-[11px] border-[1px] border-[#1494FC] py-[6px] px-[11px]"
      >
        View Profile
      </button>
    </div>
    <div>
      <div class="mb-[11px]">
        <span class="text-[14px] text-[#888888] inline-block mr-[5px]"
          >Twitter Handle:</span
        >
        <span class="text-[14px] text-[#424242] inline-block"
          >@{{ props.profileData.handle }}</span
        >
      </div>
      <div class="mb-[11px]">
        <span class="text-[14px] text-[#888888] inline-block mr-[8px]"
          >Label:</span
        >
        <span class="text-[14px] text-[#424242] inline-block">{{
          props.profileData.label
        }}</span>
      </div>
      <div class="mb-[11px]">
        <span class="text-[14px] text-[#888888] inline-block mr-[8px]"
          >Followers:</span
        >
        <span class="text-[14px] text-[#424242] inline-flex">
          {{ props.profileData.followers }}
          <img
            class="ml-[5px]"
            :class="{ 'rotate-180': props.profileData.grown }"
            src="@/assets/dynamic.svg"
            alt=""
          />
        </span>
      </div>
      <Progress
        v-if="props.profileData.botsPercentage"
        :progress-value="props.profileData.botsPercentage"
      />
    </div>
  </div>
</template>
