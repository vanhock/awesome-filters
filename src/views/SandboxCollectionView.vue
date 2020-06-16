<template>
  <div class="sandbox-collection-view">
    <collection-view
      :products-total-count="53"
      :current-page="currentPage"
      current-collection="Classic"
      test-url="https://myshop-bae277.myinsales.ru/collection/all"
      collections-menu-title="Категории"
      @update="onUpdate"
    >
      <template v-slot:collections>
        <div data-v-b17ee3d6="" class="collection-tree__header">
          Категории
        </div>
        <div data-v-b17ee3d6="" class="collection-tree__list"> <!-- class: active -->
          <div data-v-b17ee3d6="" class="collection-tree__list__item root has_child"> <!-- class: active -->
            <a
              data-v-b17ee3d6=""
              href="/collection/classic"
              class="collection-title"
            >
              Classic<span data-v-b17ee3d6="" class="products-count"
                >74</span
              ></a
            >
            <div data-v-b17ee3d6="" class="collection-tree__list__item active">
              <a
                href="/collection/esfera"
                class="collection-title"
              >
                Esfera<span data-v-b17ee3d6="" class="products-count">2</span></a
              >
            </div>
            <div data-v-b17ee3d6="" class="collection-tree__list__item">
              <a
                href="/collection/infinite"
                class="collection-title"
              >
                Infinite<span data-v-b17ee3d6="" class="products-count"
                  >2</span
                ></a
              >
            </div>
            <div data-v-b17ee3d6="" class="collection-tree__list__item">
              <a
                href="/collection/isla"
                class="collection-title"
              >
                Isla<span data-v-b17ee3d6="" class="products-count">51</span></a
              >
            </div>
            <div data-v-b17ee3d6="" class="collection-tree__list__item">
              <a
                href="/collection/tu-y-yo"
                class="collection-title"
              >
                Tu Y Yo<span data-v-b17ee3d6="" class="products-count"
                  >34</span
                ></a
              >
            </div>
            <div data-v-b17ee3d6="" class="collection-tree__list__item">
              <a
                href="/collection/alicia"
                class="collection-title"
              >
                Alicia<span data-v-b17ee3d6="" class="products-count">2</span></a
              >
            </div>
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/estela"
              class="collection-title"
            >
              Estela<span data-v-b17ee3d6="" class="products-count">10</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/baroque"
              class="collection-title"
            >
              Baroque<span data-v-b17ee3d6="" class="products-count"
                >25</span
              ></a
            >
          </div>
          <div
            data-v-b17ee3d6=""
            class="collection-tree__list__item root"
          >
            <a
              data-v-b17ee3d6=""
              href="/collection/timeless"
              class="collection-title"
            >
              Timeless<span data-v-b17ee3d6="" class="products-count"
                >41</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/brides"
              class="collection-title"
            >
              Brides<span data-v-b17ee3d6="" class="products-count">13</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/embrace"
              class="collection-title"
            >
              Embrace<span data-v-b17ee3d6="" class="products-count">3</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/esfera"
              class="collection-title"
            >
              Esfera<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/infinite"
              class="collection-title"
            >
              Infinite<span data-v-b17ee3d6="" class="products-count"
                >2</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/isla"
              class="collection-title"
            >
              Isla<span data-v-b17ee3d6="" class="products-count">51</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/tu-y-yo"
              class="collection-title"
            >
              Tu Y Yo<span data-v-b17ee3d6="" class="products-count"
                >34</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/alicia"
              class="collection-title"
            >
              Alicia<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/basic"
              class="collection-title"
            >
              Basic<span data-v-b17ee3d6="" class="products-count">7</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/nest"
              class="collection-title"
            >
              Nest<span data-v-b17ee3d6="" class="products-count">1</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/modern-metals"
              class="collection-title"
            >
              Modern Metals<span data-v-b17ee3d6="" class="products-count"
                >17</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/night-and-day"
              class="collection-title"
            >
              Night And Day<span data-v-b17ee3d6="" class="products-count"
                >6</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/divina"
              class="collection-title"
            >
              Divina<span data-v-b17ee3d6="" class="products-count">1</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/new-wave"
              class="collection-title"
            >
              New Wave<span data-v-b17ee3d6="" class="products-count"
                >1</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/colors"
              class="collection-title"
            >
              Colors<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/grape"
              class="collection-title"
            >
              Grape<span data-v-b17ee3d6="" class="products-count">1</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/silhouette"
              class="collection-title"
            >
              Silhouette<span data-v-b17ee3d6="" class="products-count"
                >2</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/essential"
              class="collection-title"
            >
              Essential<span data-v-b17ee3d6="" class="products-count"
                >4</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/black-label"
              class="collection-title"
            >
              Black Label<span data-v-b17ee3d6="" class="products-count"
                >2</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/why-not"
              class="collection-title"
            >
              Why Not<span data-v-b17ee3d6="" class="products-count"
                >12</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/gold-sparkle"
              class="collection-title"
            >
              Gold Sparkle<span data-v-b17ee3d6="" class="products-count"
                >14</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/fine-silver"
              class="collection-title"
            >
              Fine Silver<span data-v-b17ee3d6="" class="products-count"
                >20</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/fun"
              class="collection-title"
            >
              Fun<span data-v-b17ee3d6="" class="products-count">13</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/minimalist"
              class="collection-title"
            >
              Minimalist<span data-v-b17ee3d6="" class="products-count"
                >7</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/diamond"
              class="collection-title"
            >
              Diamond<span data-v-b17ee3d6="" class="products-count">4</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/social-event"
              class="collection-title"
            >
              Social Event<span data-v-b17ee3d6="" class="products-count"
                >6</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/momentum"
              class="collection-title"
            >
              Momentum<span data-v-b17ee3d6="" class="products-count"
                >7</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/mood"
              class="collection-title"
            >
              Mood<span data-v-b17ee3d6="" class="products-count">7</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/ataraxia"
              class="collection-title"
            >
              Ataraxia<span data-v-b17ee3d6="" class="products-count"
                >10</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/solfeo"
              class="collection-title"
            >
              Solfeo<span data-v-b17ee3d6="" class="products-count">13</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/aura"
              class="collection-title"
            >
              Aura<span data-v-b17ee3d6="" class="products-count">6</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/mistery"
              class="collection-title"
            >
              Mistery<span data-v-b17ee3d6="" class="products-count">5</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/gravitation"
              class="collection-title"
            >
              Gravitation<span data-v-b17ee3d6="" class="products-count"
                >5</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/ilusion"
              class="collection-title"
            >
              Ilusion<span data-v-b17ee3d6="" class="products-count"
                >17</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/starlight"
              class="collection-title"
            >
              Starlight<span data-v-b17ee3d6="" class="products-count"
                >3</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/exquisite"
              class="collection-title"
            >
              Exquisite<span data-v-b17ee3d6="" class="products-count"
                >23</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/spirit"
              class="collection-title"
            >
              Spirit<span data-v-b17ee3d6="" class="products-count">1</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/enchantment"
              class="collection-title"
            >
              Enchantment<span data-v-b17ee3d6="" class="products-count"
                >8</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/fugue"
              class="collection-title"
            >
              Fugue<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/angel"
              class="collection-title"
            >
              Angel<span data-v-b17ee3d6="" class="products-count">5</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/polka"
              class="collection-title"
            >
              Polka<span data-v-b17ee3d6="" class="products-count">8</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/mens-collection"
              class="collection-title"
            >
              Men'S Collection<span data-v-b17ee3d6="" class="products-count"
                >2</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/atlas"
              class="collection-title"
            >
              Atlas<span data-v-b17ee3d6="" class="products-count">10</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/satis"
              class="collection-title"
            >
              Satis<span data-v-b17ee3d6="" class="products-count">5</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/amazona"
              class="collection-title"
            >
              Amazona<span data-v-b17ee3d6="" class="products-count">3</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/limited-edition"
              class="collection-title"
            >
              Limited Edition<span data-v-b17ee3d6="" class="products-count"
                >6</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/romance"
              class="collection-title"
            >
              Romance<span data-v-b17ee3d6="" class="products-count"
                >11</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/gatsby"
              class="collection-title"
            >
              Gatsby<span data-v-b17ee3d6="" class="products-count">7</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/casiopea"
              class="collection-title"
            >
              Casiopea<span data-v-b17ee3d6="" class="products-count"
                >1</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/rosa"
              class="collection-title"
            >
              Rosa<span data-v-b17ee3d6="" class="products-count">8</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/rock-star"
              class="collection-title"
            >
              Rock Star<span data-v-b17ee3d6="" class="products-count"
                >19</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/galtea"
              class="collection-title"
            >
              Galtea<span data-v-b17ee3d6="" class="products-count">7</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/ballet"
              class="collection-title"
            >
              Ballet<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/zodiac"
              class="collection-title"
            >
              Zodiac<span data-v-b17ee3d6="" class="products-count">12</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/arabesque"
              class="collection-title"
            >
              Arabesque<span data-v-b17ee3d6="" class="products-count"
                >8</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/pirouette"
              class="collection-title"
            >
              Pirouette<span data-v-b17ee3d6="" class="products-count"
                >3</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/chasse"
              class="collection-title"
            >
              Chasse<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/cotillon"
              class="collection-title"
            >
              Cotillon<span data-v-b17ee3d6="" class="products-count"
                >4</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/juliette"
              class="collection-title"
            >
              Juliette<span data-v-b17ee3d6="" class="products-count"
                >4</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/bejart"
              class="collection-title"
            >
              Bejart<span data-v-b17ee3d6="" class="products-count">11</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/danzarina"
              class="collection-title"
            >
              Danzarina<span data-v-b17ee3d6="" class="products-count"
                >7</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/duato"
              class="collection-title"
            >
              Duato<span data-v-b17ee3d6="" class="products-count">4</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/nureyev"
              class="collection-title"
            >
              Nureyev<span data-v-b17ee3d6="" class="products-count">4</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/amour"
              class="collection-title"
            >
              Amour<span data-v-b17ee3d6="" class="products-count">2</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/silfide"
              class="collection-title"
            >
              Silfide<span data-v-b17ee3d6="" class="products-count">3</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/coppelia"
              class="collection-title"
            >
              Coppelia<span data-v-b17ee3d6="" class="products-count"
                >2</span
              ></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/cies"
              class="collection-title"
            >
              Cies<span data-v-b17ee3d6="" class="products-count">15</span></a
            >
          </div>
          <div data-v-b17ee3d6="" class="collection-tree__list__item root">
            <a
              data-v-b17ee3d6=""
              href="/collection/outlet"
              class="collection-title"
            >
              Outlet<span data-v-b17ee3d6="" class="products-count">14</span></a
            >
          </div>
        </div>
      </template>
    </collection-view>
  </div>
</template>
<script>
import CollectionView from "./CollectionView";
import FiltersMock from "../_mock/collectionFilters";
import { getParameterByName } from "../_helpers/utils";
export default {
  name: "SandboxCollectionView",
  components: { CollectionView },
  computed: {
    filters() {
      return FiltersMock;
    },
    currentPage() {
      return parseInt(getParameterByName("page")) || 1;
    }
  },
  methods: {
    onUpdate() {
      console.log("Product list updated!");
    }
  }
};
</script>

<style lang="scss">
@import "../_assets/styles/normalize";
@import "../_assets/styles/grid.min";
@import "../_assets/styles/sandbox";
@import "../_assets/styles/product-card";
</style>
