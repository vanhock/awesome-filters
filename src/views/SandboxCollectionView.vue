<template>
  <div class="sandbox-collection-view">
    <collection-view
      :filters="filters"
      :products-total-count="53"
      :current-page="currentPage"
      current-collection="Classic"
      test-url="https://majorica.com.ru/collection/all"
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
      <template v-slot:products>
        <div class="row">
          <div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-00199012?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/Ft9_F_zW2xM/fit/268/268/ce/1/plain/images/products/1/499/259842547/large_00199012.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/xGqWUtFI1ao/fit/268/268/ce/1/plain/images/products/1/499/259842547/large_00199012.jpg" type="image/jpg"> <img alt="Majorica 00199.01.2." title="Majorica 00199.01.2." class="product-img"></picture><div class="product-title">Кольцо Classic</div> <div class="product-sku">00199.01.2.</div><div class="product-price">    6 300&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003200120007011?only_available=true" class="change-image"><picture><source srcset="https://static-eu.insales.ru/r/gqhAhRN0EiI/fit/268/268/ce/1/plain/images/products/1/512/259842560/large_003200120007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/FYNPdVegj6k/fit/268/268/ce/1/plain/images/products/1/512/259842560/large_003200120007011.jpg" type="image/jpg"> <img alt="Majorica 00320.01.2.000.701.1" title="Majorica 00320.01.2.000.701.1" class="product-img"></picture><picture><source srcset="https://static-eu.insales.ru/r/jHUfSW3yz3g/fit/268/268/ce/1/plain/images/products/1/518/259842566/large_003200120007011_2.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/0syTt088AZc/fit/268/268/ce/1/plain/images/products/1/518/259842566/large_003200120007011_2.jpg" type="image/jpg"> <img alt="Majorica 00320.01.2.000.701.1 - 2" title="Majorica 00320.01.2.000.701.1 - 2" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00320.01.2.000.701.1</div><div class="product-price">    2 450&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003220110007011?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/QlVqo43JUJs/fit/268/268/ce/1/plain/images/products/1/530/259842578/large_003220110007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/gzbdHH_pV1Y/fit/268/268/ce/1/plain/images/products/1/530/259842578/large_003220110007011.jpg" type="image/jpg"> <img alt="Majorica 00322.01.1.000.701.1" title="Majorica 00322.01.1.000.701.1" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00322.01.1.000.701.1</div><div class="product-price">    3 150&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003220120007011?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/l6swqOXOWg8/fit/268/268/ce/1/plain/images/products/1/534/259842582/large_003220120007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/D62vAUQFKmQ/fit/268/268/ce/1/plain/images/products/1/534/259842582/large_003220120007011.jpg" type="image/jpg"> <img alt="Majorica 00322.01.2.000.701.1" title="Majorica 00322.01.2.000.701.1" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00322.01.2.000.701.1</div><div class="product-price">    3 150&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003230110007011?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/nuxjLlPAk2s/fit/268/268/ce/1/plain/images/products/1/542/259842590/large_003230110007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/djkh-SfnE4I/fit/268/268/ce/1/plain/images/products/1/542/259842590/large_003230110007011.jpg" type="image/jpg"> <img alt="Majorica 00323.01.1.000.701.1" title="Majorica 00323.01.1.000.701.1" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00323.01.1.000.701.1</div><div class="product-price">    3 850&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003240110007011?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/vQaNuto5jwI/fit/268/268/ce/1/plain/images/products/1/553/259842601/large_003240110007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/Mv8Ai7jTMwA/fit/268/268/ce/1/plain/images/products/1/553/259842601/large_003240110007011.jpg" type="image/jpg"> <img alt="Majorica 00324.01.1.000.701.1" title="Majorica 00324.01.1.000.701.1" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00324.01.1.000.701.1</div><div class="product-price">    4 200&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003240120007011?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/QJJ-ajqImJE/fit/268/268/ce/1/plain/images/products/1/557/259842605/large_003240120007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/xF4Cwcokfj4/fit/268/268/ce/1/plain/images/products/1/557/259842605/large_003240120007011.jpg" type="image/jpg"> <img alt="Majorica 00324.01.2.000.701.1" title="Majorica 00324.01.2.000.701.1" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00324.01.2.000.701.1</div><div class="product-price">    4 200&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003240310007011?only_available=true"><picture><source srcset="https://static-eu.insales.ru/r/nXao_MXg1uk/fit/268/268/ce/1/plain/images/products/1/562/259842610/large_003240310007011.jpg@webp" type="image/webp"> <source srcset="https://static-eu.insales.ru/r/3Emju7uZrXE/fit/268/268/ce/1/plain/images/products/1/562/259842610/large_003240310007011.jpg" type="image/jpg"> <img alt="Majorica 00324.03.1.000.701.1" title="Majorica 00324.03.1.000.701.1" class="product-img"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00324.03.1.000.701.1</div><div class="product-price">    4 200&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003240320007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/MtkPhwpGoy8/fit/268/268/ce/1/plain/images/products/1/566/259842614/large_003240320007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/MtkPhwpGoy8/fit/268/268/ce/1/plain/images/products/1/566/259842614/large_003240320007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/aTKluq5gNrE/fit/268/268/ce/1/plain/images/products/1/566/259842614/large_003240320007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/aTKluq5gNrE/fit/268/268/ce/1/plain/images/products/1/566/259842614/large_003240320007011.jpg"> <img alt="Majorica 00324.03.2.000.701.1" title="Majorica 00324.03.2.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00324.03.2.000.701.1</div><div class="product-price">    4 200&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003244420007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/0YjLZjkctCg/fit/268/268/ce/1/plain/images/products/1/569/259842617/large_003244420007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/0YjLZjkctCg/fit/268/268/ce/1/plain/images/products/1/569/259842617/large_003244420007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/0UoHg11bfPg/fit/268/268/ce/1/plain/images/products/1/569/259842617/large_003244420007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/0UoHg11bfPg/fit/268/268/ce/1/plain/images/products/1/569/259842617/large_003244420007011.jpg"> <img alt="Majorica 00324.44.2.000.701.1" title="Majorica 00324.44.2.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00324.44.2.000.701.1</div><div class="product-price">    4 200&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003248220007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/MSJx5JVOPL4/fit/268/268/ce/1/plain/images/products/1/573/259842621/large_003248220007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/MSJx5JVOPL4/fit/268/268/ce/1/plain/images/products/1/573/259842621/large_003248220007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/hxIZvOzSNt8/fit/268/268/ce/1/plain/images/products/1/573/259842621/large_003248220007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/hxIZvOzSNt8/fit/268/268/ce/1/plain/images/products/1/573/259842621/large_003248220007011.jpg"> <img alt="Majorica 00324.82.2.000.701.1" title="Majorica 00324.82.2.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00324.82.2.000.701.1</div><div class="product-price">    4 200&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003250110007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/D4xIe0qa8is/fit/268/268/ce/1/plain/images/products/1/578/259842626/large_003250110007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/D4xIe0qa8is/fit/268/268/ce/1/plain/images/products/1/578/259842626/large_003250110007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/AbLtH6zrOW8/fit/268/268/ce/1/plain/images/products/1/578/259842626/large_003250110007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/AbLtH6zrOW8/fit/268/268/ce/1/plain/images/products/1/578/259842626/large_003250110007011.jpg"> <img alt="Majorica 00325.01.1.000.701.1" title="Majorica 00325.01.1.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00325.01.1.000.701.1</div><div class="product-price">    4 600&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003250120007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/Kv5rxgjozVw/fit/268/268/ce/1/plain/images/products/1/584/259842632/large_003250120007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/Kv5rxgjozVw/fit/268/268/ce/1/plain/images/products/1/584/259842632/large_003250120007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/xyBhsoqizJs/fit/268/268/ce/1/plain/images/products/1/584/259842632/large_003250120007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/xyBhsoqizJs/fit/268/268/ce/1/plain/images/products/1/584/259842632/large_003250120007011.jpg"> <img alt="Majorica 00325.01.2.000.701.1" title="Majorica 00325.01.2.000.701.1" class="product-img ls-is-cached lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00325.01.2.000.701.1</div><div class="product-price">    4 600&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003260110007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/JI2s8PVtvdg/fit/268/268/ce/1/plain/images/products/1/587/259842635/large_003260110007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/JI2s8PVtvdg/fit/268/268/ce/1/plain/images/products/1/587/259842635/large_003260110007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/NOZtszeKVCo/fit/268/268/ce/1/plain/images/products/1/587/259842635/large_003260110007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/NOZtszeKVCo/fit/268/268/ce/1/plain/images/products/1/587/259842635/large_003260110007011.jpg"> <img alt="Majorica 00326.01.1.000.701.1" title="Majorica 00326.01.1.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.01.1.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003260120007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/t_e0siY4EYw/fit/268/268/ce/1/plain/images/products/1/590/259842638/large_003260120007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/t_e0siY4EYw/fit/268/268/ce/1/plain/images/products/1/590/259842638/large_003260120007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/VDI7vuJdwAs/fit/268/268/ce/1/plain/images/products/1/590/259842638/large_003260120007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/VDI7vuJdwAs/fit/268/268/ce/1/plain/images/products/1/590/259842638/large_003260120007011.jpg"> <img alt="Majorica 00326.01.2.000.701.1" title="Majorica 00326.01.2.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.01.2.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003260320007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/yDSV78OEn6g/fit/268/268/ce/1/plain/images/products/1/597/259842645/large_003260320007011.jpg@webp" type="image/webp" srcset="https://static-eu.insales.ru/r/yDSV78OEn6g/fit/268/268/ce/1/plain/images/products/1/597/259842645/large_003260320007011.jpg@webp"> <source data-srcset="https://static-eu.insales.ru/r/SJopt0sF-Hs/fit/268/268/ce/1/plain/images/products/1/597/259842645/large_003260320007011.jpg" type="image/jpg" srcset="https://static-eu.insales.ru/r/SJopt0sF-Hs/fit/268/268/ce/1/plain/images/products/1/597/259842645/large_003260320007011.jpg"> <img alt="Majorica 00326.03.2.000.701.1" title="Majorica 00326.03.2.000.701.1" class="product-img lazyloaded"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.03.2.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003260620007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/QDJBYh4xgZM/fit/268/268/ce/1/plain/images/products/1/601/259842649/large_003260620007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/ceURJ9Jz48E/fit/268/268/ce/1/plain/images/products/1/601/259842649/large_003260620007011.jpg" type="image/jpg"> <img alt="Majorica 00326.06.2.000.701.1" title="Majorica 00326.06.2.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.06.2.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003261120007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/eLFhEuE0jyI/fit/268/268/ce/1/plain/images/products/1/611/259842659/large_003261120007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/_77XQ9G9w8k/fit/268/268/ce/1/plain/images/products/1/611/259842659/large_003261120007011.jpg" type="image/jpg"> <img alt="Majorica 00326.11.2.000.701.1" title="Majorica 00326.11.2.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.11.2.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003264420007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/DmHH6PfLGtk/fit/268/268/ce/1/plain/images/products/1/616/259842664/large_003264420007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/E4QwKbXjzJI/fit/268/268/ce/1/plain/images/products/1/616/259842664/large_003264420007011.jpg" type="image/jpg"> <img alt="Majorica 00326.44.2.000.701.1" title="Majorica 00326.44.2.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.44.2.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003268220007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/_kIQ29EIokA/fit/268/268/ce/1/plain/images/products/1/620/259842668/large_003268220007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/96vSip9V5rk/fit/268/268/ce/1/plain/images/products/1/620/259842668/large_003268220007011.jpg" type="image/jpg"> <img alt="Majorica 00326.82.2.000.701.1" title="Majorica 00326.82.2.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00326.82.2.000.701.1</div><div class="product-price">    4 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003280110007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/kLH0J7N0Xsg/fit/268/268/ce/1/plain/images/products/1/627/259842675/large_003280110007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/bFJvXNsHI2o/fit/268/268/ce/1/plain/images/products/1/627/259842675/large_003280110007011.jpg" type="image/jpg"> <img alt="Majorica 00328.01.1.000.701.1" title="Majorica 00328.01.1.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00328.01.1.000.701.1</div><div class="product-price">    5 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003280120007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/WrMzgveOx0Q/fit/268/268/ce/1/plain/images/products/1/630/259842678/large_003280120007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/tEOFrmze7rE/fit/268/268/ce/1/plain/images/products/1/630/259842678/large_003280120007011.jpg" type="image/jpg"> <img alt="Majorica 00328.01.2.000.701.1" title="Majorica 00328.01.2.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00328.01.2.000.701.1</div><div class="product-price">    5 800&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-003460120000101?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/H4kDUkxjdZQ/fit/268/268/ce/1/plain/images/products/1/648/259842696/large_003460120000101.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/u2XXmINJYDU/fit/268/268/ce/1/plain/images/products/1/648/259842696/large_003460120000101.jpg" type="image/jpg"> <img alt="Majorica 00346.01.2.000.010.1" title="Majorica 00346.01.2.000.010.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">00346.01.2.000.010.1</div><div class="product-price">    8 000&nbsp;руб    </div></a></div><div class="product-card col-6 col-md-4 col-xl-3"><div class="labels"></div> <button data-text="Сохранить" data-text-active="В избранном" class="favorites"><i class="fa fa-lg fa-heart-o"></i> <i class="fa fa-lg fa-heart"></i></button> <button class="btn quick-view-button">    Быстрый просмотр  </button> <a href="/collection/classic/product/majorica-089450120007011?only_available=true"><picture><source data-srcset="https://static-eu.insales.ru/r/wLaLCpH52u8/fit/268/268/ce/1/plain/images/products/1/767/259842815/large_089450120007011.jpg@webp" type="image/webp"> <source data-srcset="https://static-eu.insales.ru/r/n7T4yUbnuQ8/fit/268/268/ce/1/plain/images/products/1/767/259842815/large_089450120007011.jpg" type="image/jpg"> <img alt="Majorica 08945.01.2.000.701.1" title="Majorica 08945.01.2.000.701.1" class="product-img lazyload"></picture><div class="product-title">Серьги Classic</div> <div class="product-sku">08945.01.2.000.701.1</div><div class="product-price">    4 700&nbsp;руб    </div></a></div>
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
@import "../_assets/styles/sandbox";
@import "../_assets/styles/product-card";
</style>
