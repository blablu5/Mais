<script setup>

</script>

<script>
export default {
  data(){
    return{
      entschieden: false,
      beitreten: true,
      maisinfo: "Mais ist reich an Ballaststoffen (10 Gramm pro 100 Gramm): Dies sind unverdauliche Bestandteile der Nahrung, die die Verdauung fördern. Außerdem eignet sich Mais mit mehr als 8 Gramm Eiweiß gut als pflanzliche Proteinquelle. Bei den Mineralstoffen sind vor allem Kalium, Eisen und Magnesium in nennenswerten Mengen vorhanden und tragen zu einer gesunden Ernährung bei. "
    }
  },
  methods: {
    change(beitreten) {
      this.beitreten = beitreten,
      this.entschieden = true
    }
  }
}
</script>
<template>  
    <div class="bg-black">
        <header class="py-5 bg-greenbg bg-bottom pb-8">
            <h1 class="text-white font-bold text-5xl text-center font-fantasy">Mais Fanclub</h1>
        </header>
        <div class="pb-5 bg-yellowbg bg-bottom">
          <div class="w-96 pb-5 mx-auto">
              <h2 class="font-fantasy font-bold text-4xl">Mais Info:</h2>
              <p class="font-fantasy font-bold">{{maisinfo}}</p>
          </div>    
        </div>
        <div>
            <div class="mx-auto w-96 rounded-full bg-yellow-500">
                <h2 class="font-fantasy text-center">Möchtest du dem Mais Fanclub beitreten?</h2>
            </div>
            <div class="flex justify-center">
                <button v-on:click="change(true)" class="mr-10 mt-5 w-32 h-32 rounded-full bg-yellow-400 active:bg-yellow-900" type="button">
                    <h2 class="active:text-white text-5xl align-middle active:align-top">Ja</h2>
                </button>
                <button v-on:click="change(false)" class="ml-10 mt-5 w-32 h-32 rounded-full bg-green-900 active:bg-green-600" type="button">
                    <h2 class="text-white active:text-black text-5xl align-middle active:align-top">Nein</h2>
                </button>
            </div>
        </div>
        <div class="flex justify-center">
          <img class="pr-20" v-if="beitreten&&entschieden" src="./assets/arrowYes.svg" alt="Pfeil">
          <img class="pl-20" v-else-if="!beitreten" src="./assets/arrowNo.svg" alt="Pfeil">
        </div>
    </div>




</template>
