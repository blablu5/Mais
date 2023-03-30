<script setup>
import job1 from './components/job1.vue';
import Job2 from './components/job2.vue';
</script>

<script>
export default {
  components :{
    job1,
    Job2
},
  data(){
    return{
      entschieden: false,
      beitreten: true,
      erklärungMais: "Deine Aufgabe ist es einen Flyer für den Mais-Fanclub zu erstellen. Hier hast du sechs Artikel. Entscheide dich welche Artikel du dem Flyer hinzufügen möchtest und welche nicht.",
      erklärungZucchetti: "Deine Aufgabe ist es einen Flyer für den Zucchetti-Fanclub zu erstellen. Hier hast du sechs Artikel. Entscheide dich welche Artikel du dem Flyer hinzufügen möchtest und welche nicht.",
      maisinfo: "Teste wie gut du Personen überzeugen kannst deinem Fanclub beizutreten. Entscheide dich zunächst, ob du dich Mais oder Zucchetti anschliessen möchtest.",
      disabled: false
    }
  },
  methods: {
    change(beitreten) {
      this.beitreten = beitreten
      if (!this.entschieden) {
        this.entschieden = true 
        this.scrolling()
      }
      this.disabled = true
    },
    scrolling() {
      this.$refs["arrows"].scrollIntoView({ behavior: "smooth" })
    }
  }
}

</script>

<template>  
    <div class="bg-black min-h-screen">
        <header class="py-5 bg-greenbg bg-bottom pb-8">
            <h1 class="text-white font-bold text-5xl text-center font-fantasy">Mais-Fanclub</h1>
        </header>
        <div class="pb-5 bg-yellowbg bg-bottom">
          <div class="mx-20 pb-5">
              <h2 class="font-fantasy font-bold text-4xl">Treniere Personen von deinem Fanclub zu überzeugen.</h2>
              <p class="font-fantasy font-bold">{{maisinfo}}</p>
          </div>    
        </div>
        <div>
            <div class="mx-auto w-96 rounded-full bg-yellow-500">
                <h2 class="font-fantasy text-center">Für welchen Fanclub möchtest du arbeiten?</h2>
            </div>
            <div class="flex justify-center">
                <button :disabled="disabled" v-on:click="change(true)" class="mr-10 mt-5 w-32 h-32 rounded-full bg-yellow-400 active:bg-yellow-900" type="button">
                    <h2 class="active:text-white text-2xl align-middle active:align-top font-fantasy font-bold">Mais</h2>
                </button>
                <button :disabled="disabled" v-on:click="change(false)" class="ml-10 mt-5 w-32 h-32 rounded-full bg-green-900 active:bg-green-600" type="button">
                    <h2 class="text-white active:text-black text-2xl align-middle active:align-top font-fantasy font-bold">Zucchetti</h2>
                </button>
            </div>
        </div>
        <div ref="arrows" class="flex justify-center">
          <img class="pr-20" v-if="beitreten&&entschieden" src="./assets/arrowYes.svg" alt="Pfeil">
          <img class="pl-20" v-else-if="!beitreten" src="./assets/arrowNo.svg" alt="Pfeil">
        </div>
        <div v-if="beitreten&&entschieden">
          <p class="text-white mx-5 my-10">{{ erklärungMais }}</p>
          <job1/>
        </div>
        <div v-else-if="!beitreten">
          <p class="text-white mx-5 my-10">{{ erklärungZucchetti }}</p>
          <job1/>
        </div>
    </div>
</template>