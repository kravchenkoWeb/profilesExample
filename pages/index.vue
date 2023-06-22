<script setup>
useHead({
  title: "Home",
});

const { data, error } = await useFetch("/api/profiles");
</script>

<template>
  <div>
    <Hero />
    <Swiper
      style="padding: 20px 19px"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
    >
      <SwiperSlide v-for="profile in data" :key="slide">
        <ProfileCard :profile-data="profile" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.swiper-pagination {
  margin-top: 13px;
  position: static;

  .swiper-pagination-bullet {
    width: 38px;
    height: 4px;
    background-color: #d9d9d9;
    border-radius: 16px;
    margin-right: 3px;

    &:last-child {
      margin-right: 0;
    }

    &-active {
      background-color: #1394fc;
    }
  }
}
</style>
