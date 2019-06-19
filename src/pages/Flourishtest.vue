<template>
<div>
    <Navbar/>
       <div id="shop">
    <!-- header 主視覺 -->
    <header id="showcase" class="grid">
        <div class="bg-img-flourish"></div>
    </header>
    <!-- Main area -->
    <main id="main">
        <section id="section-a" class="grid">
            <div>
                <h2 class="cont-title">Flourish and Blotts</h2>
                <div class="content-text">
                    <p>"They bought Harry’s school books in a shop called Flourish and Blotts where the shelves were stacked to the ceiling with books as large as paving stones bound in leather; books the size of postage stamps in covers of silk; books full of peculiar symbols and a few books with nothing in them at all."</p>

                </div>

            </div>
        </section>
        <!-- Goods -->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card pic1">
                        <a href=""><img src="../assets/Flourish/bookofspells.jpg" alt=""></a>
                        <div class="overlay"></div>
                        <div class="info"></div>
                        <div class="card-content">
                            <h2 class="card-title">The Standard Book of Spells, Grade 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus adipisci maiores
                                tenetur, distinctio commodi inventore placeat ipsa in eius?</p>
                               <v-card-actions>
                        <v-btn color="gray" dark @click="orderRecipebookofspells">Add this</v-btn>
                    </v-card-actions>

                        </div>


                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Flourish/bookofcurse.jpg" alt="">
                        <div class="card-content">
                            <h2 class="card-title">Curses and Counter-Curses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus adipisci maiores
                                tenetur, distinctio commodi inventore placeat ipsa in eius?</p>
                                <v-card-actions>
                        <v-btn color="gray" dark @click="orderRecipebookofcurses">Add this</v-btn>
                    </v-card-actions>
                        </div>

                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;">
                        <img src="../assets/Flourish/bookofmagical.jpg" alt="">
                        <div class="card-content">
                            <h2 class="card-title">Magical Drafts and Potions </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus adipisci maiores
                                tenetur, distinctio commodi inventore placeat ipsa in eius?</p>
                                <v-card-actions>
                        <v-btn color="gray" dark @click="orderRecipebookofmagical">Add this</v-btn>
                    </v-card-actions>
                        </div>



                    </div>
                </li>
            </ul>
        </section>

        <!-- section c -->
        <section id="section-c" class="grid">
            <div class="box">
                <h2 class="content-title">contact us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi dolor fugit sunt
                    exercitationem, architecto unde cum aliquam vitae officia.</p>
                <a href="">contact us</a>
            </div>
        </section>
    </main>
    <!-- footer -->
    <footer id="main-footer" class="grid">
        <div>David is a stupid muggle</div>
       

    </footer>
       </div>
    </div>
</template>

<script>
import Navbar from  './Navbar'
export default {
    name: "Flourish",
   components:{
    Navbar
  },
  computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
  data() {
    return {};
  },
   methods: {
        orderRecipeMagical: function() {
            if (this.isAuthenticated) {
                this.$store.dispatch('addRecipe');
                return "Magical Drafts and Potions"
            } else {
                this.$router.push('/Login');
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
@import"../style/flourish.css"
</style>

