<template>
  <div class="has-text-centered mt-6 project-screen">
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
        <Slide v-for="(index, image) in pictures" :key="image.id">
          <div class="carousel__item">
            <div class="carousel__item-content">
              <figure class="image carousel__item-picture">
                <img :src="require(`@/assets/${index.url}`)" />
              </figure>
              <h2 class="has-text-weight-bold is-size-4-mobile is-size-2 mb-6">
                {{ $t("project.content.name") }}
              </h2>

              <div class="carousel__item-description">
                <p class="is-size-7-mobile is-size-6">
                  {{ $t("project.content.description") }}
                </p>
              </div>
              <a
                type="button"
                :href="index.site"
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
      pictures: [
        { id: 1, url: "DeOne.png", site: "https://www.dando.co/es" },
        {
          id: 2,
          url: "GrupoTravel.png",
          site: "https://semi-dios.github.io/landing-page-grupotravel/",
        },
        {
          id: 3,
          url: "DeOne.png",
          site: "https://semi-dios.github.io/landing-page-grupotravel/",
        },
        {
          id: 4,
          url: "DeOne.png",
          site: "https://semi-dios.github.io/landing-page-grupotravel/",
        },
      ],
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
