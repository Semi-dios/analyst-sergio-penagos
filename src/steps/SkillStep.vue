<template>
  <div class="container is-widescreen skill-screen" id="stepsRef4">
    <div class="columns mb-6">
      <div class="column is-12">
        <figure class="image skill-screen__image" data-aos="fade-right">
          <img alt="arrow_line" src="@/assets/Arrow.png" />
        </figure>

        <div class="skill-screen__title">
          <span class="text-gradient is-size-4-mobile is-size-3">{{
            $t("skills.subtitle")
          }}</span>
          <h2
            class="has-text-weight-bold title is-size-3-mobile is-size-1 is-spaced"
          >
            {{ $t("skills.title") }}
          </h2>
        </div>
      </div>
    </div>
    <div class="columns skill-screen__content" >
      <div class="column is-3-tablet is-variable is-12-mobile">
        <div class="skill-screen__content-skill" data-aos="fade-right">
          <span class="text-gradient is-size-5-mobile is-size-4"> 01 </span>
          <h6 class="has-text-weight-semibold is-size-5-mobile is-size-4 mb-4">
            {{ $t("skills.text_1") }}
          </h6>

          <ul class="skill-screen__list" data-aos="fade-left">
            <li
              v-for="index in 4"
              :key="index"
              class="has-text-weight-normal is-size-7-mobile is-size-6 mb-1"
            >
              {{ $t(`skills.front.skill_${index}`) }}
            </li>
          </ul>
        </div>
      </div>
      <div class="column is-3-tablet is-variable is-12-mobile" >
        <div class="skill-screen__content-skill" data-aos="fade-down">
          <span class="text-gradient is-size-5-mobile is-size-4"> 02 </span>
          <h6 class="has-text-weight-semibold is-size-5-mobile is-size-4 mb-4">
            {{ $t("skills.text_2") }}
          </h6>
          <ul class="skill-screen__list" data-aos="fade-up">
            <li
              v-for="index in 4"
              :key="index"
              class="has-text-weight-normal is-size-7-mobile is-size-6 mb-1"
            >
              {{ $t(`skills.back.skill_${index}`) }}
            </li>
          </ul>
        </div>
      </div>
      <div class="column is-3-tablet is-variable is-12-mobile" >
        <div class="skill-screen__content-skill" data-aos="fade-left">
          <span class="text-gradient is-size-5-mobile is-size-4"> 03 </span>
          <h6 class="has-text-weight-semibold is-size-5-mobile is-size-4 mb-4">
            {{ $t("skills.text_3") }}
          </h6>
          <ul class="skill-screen__list" data-aos="fade-right">
            <li
              v-for="index in 4"
              :key="index"
              class="has-text-weight-normal is-size-7-mobile is-size-6 mb-1"
            >
              {{ $t(`skills.other.skill_${index}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkillStep",
});
</script>
