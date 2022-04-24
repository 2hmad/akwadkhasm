<template>
  <div class="fav-stores">
    <h3>{{ $t("popular-stores") }}</h3>
    <div class="stores">
      <ul>
        <li v-for="n in 12">
          <NuxtLink to="/">
            <div class="store">
              <img
                src="https://cdn.almowafir.com/files/w100_adv_waffarha.jpg"
                alt=""
              />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink to="/stores">
      <button class="see-more">{{ $t("see-more") }}</button>
    </NuxtLink>
  </div>
</template>
