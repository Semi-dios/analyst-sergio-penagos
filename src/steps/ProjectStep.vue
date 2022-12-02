<template>
  <div class="has-text-centered mt-6 project-screen" id="stepsRef3">
    <div class="project-screen__title">
      <span class="text-gradient is-size-4-mobile is-size-3 mb-3">{{
        $t("project.subtitle")
      }}</span>
      <h2 class="has-text-weight-bold title is-size-3-mobile is-size-1">
        {{ $t("project.title") }}
      </h2>
    </div>

    <Carousel>
      <template #slides>
        <Slide v-for="(index, image) in projects" :key="image.id">
          <div class="carousel__item">
            <div class="carousel__item-content">
              <figure class="image carousel__item-picture">
                <img
                  :src="require('@/assets/' + $t(`projects.url_${index}`))"
                  :alt="$t(`projects.image_alt_${index}`)"
                />
              </figure>

              <h2 class="has-text-weight-bold is-size-4-mobile is-size-2 mb-6">
                {{ $t(`projects.name_${index}`) }}
              </h2>

              <div class="carousel__item-description">
                <div class="is-flex mb-5">
                  <p
                    class="is-size-7-mobile is-flex is-align-items-center mr-1 is-size-6"
                  >
                    <span class="icon">
                      <ion-icon
                        :name="'logo-' + $t(`projects.techs_${index}.tech_1`)"
                      ></ion-icon>
                    </span>
                    {{ $t(`projects.techs_${index}.tech_1`) }}
                  </p>
                  <p
                    class="is-size-7-mobile is-flex is-align-items-center mr-1 is-size-6"
                  >
                    <span class="icon">
                      <ion-icon
                        :name="'logo-' + $t(`projects.techs_${index}.tech_2`)"
                      ></ion-icon>
                    </span>
                    {{ $t(`projects.techs_${index}.tech_2`) }}
                  </p>
                  <p
                    class="is-size-7-mobile is-flex is-align-items-center mr-1 is-size-6"
                  >
                    <span class="icon">
                      <ion-icon
                        :name="'logo-' + $t(`projects.techs_${index}.tech_3`)"
                      ></ion-icon>
                    </span>
                    {{ $t(`projects.techs_${index}.tech_3`) }}
                  </p>
                  <p
                    class="is-size-7-mobile is-flex is-align-items-center mr-1 is-size-6"
                  >
                    <span class="icon"
                      ><ion-icon
                        :name="'logo-' + $t(`projects.techs_${index}.tech_4`)"
                      ></ion-icon
                    ></span>
                    {{ $t(`projects.techs_${index}.tech_4`) }}
                  </p>
                </div>
                <p class="is-size-7-mobile is-size-6">
                  {{ $t(`projects.description_${index}`) }}
                </p>
              </div>
              <a
                type="button"
                :href="$t(`projects.site_${index}`)"
                class="is-size-7-mobile is-size-5"
                target="_blank"
              >
                {{ $t("project.more") }}
              </a>
            </div>
          </div>
        </Slide>
      </template>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ProjectStep",
  props: {
    images: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      projects: 4,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/_variables";

.carousel {
  &__next,
  &__prev {
    display: none;
  }
  &__pagination {
    &-button {
      &::after {
        background-color: $gray-50;
        width: 1rem;
        border-radius: 100px;
      }
      &:hover {
        &::after {
          background-color: $primary-25;
        }
      }
      &--active {
        &::after {
          background-color: $primary;
          width: 2rem;
        }
        &:hover {
          &::after {
            background-color: $primary;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    &__next,
    &__prev {
      background-color: $primary;
      color: $beige-lighter;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
    }
    &__pagination {
      &-button {
        &::after {
          background-color: $gray-50;
          width: 1.5rem;
        }
        &--active {
          &::after {
            background-color: $primary;
            width: 3rem;
          }
          &:hover {
            &::after {
              background-color: $primary;
            }
          }
        }
      }
    }
  }
}
</style>
