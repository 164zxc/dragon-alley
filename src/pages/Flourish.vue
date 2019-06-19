<template>
<div>
    <Navbar/>
       <div id="shop">
    <!-- header 主視覺 -->
    <div id="showcase" class="grid">
        <div class="bg-img-flourish"></div>
    </div>
    <!-- Main area -->
    <main id="main">
        <section id="section-a" class="grid">
            <div>
                <h2 class="content-title"> Flourish and Blotts</h2>
            
                    <h4>"They bought Harry’s school books in a shop called Flourish and Blotts where the shelves were stacked to the ceiling with books as large as paving stones bound in leather; books the size of postage stamps in covers of silk; books full of peculiar symbols and a few books with nothing in them at all."
<br>—Description of Flourish and Blotts</h4>

            </div>
        </section>
        <!-- Goods -->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card pic1">
                        <a href=""><img src="../assets/Flourish/bookofspells.jpg"></a>
                        <div class="overlay"></div>
                        <div class="info"></div>
                        <div class="card-content">
                            <h2 class="card-title">The Standard Book of Spells, Grade 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus adipisci maiores
                                tenetur, distinctio commodi inventore placeat ipsa in eius?</p>
                                <a href="#section-b" class="btn-2">Add this</a>

                        </div>


                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Flourish/bookofcurse.jpg" >
                        <div class="card-content">
                            <h2 class="card-title">Curses and Counter-Curses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus adipisci maiores
                                tenetur, distinctio commodi inventore placeat ipsa in eius?</p>
                                <a href="#section-b" class="btn-2">Add this</a>
                        </div>

                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Flourish/bookofmagical.jpg" >
                        <div class="card-content">
                            <h2 class="card-title">Magical Drafts and Potions </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus adipisci maiores
                                tenetur, distinctio commodi inventore placeat ipsa in eius?</p>
                                <a href="#section-b" class="btn-2">Add this</a>
                        </div>



                    </div>
                </li>
            </ul>
        </section>

        <!-- section c -->
    </main>
    <!-- footer -->
    <footer id="main-footer" class="grid">
        <div class="box"> <h4>What was there to be gained by fighting the most evil wizard who has ever existed? Only innocent lives! Died rather than betray your friends!</h4></div> 
        <div>Alice is a stupid muggle <br> <h2><a href="#top">TOP</a></h2></div>
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
  data() {
    return {};
  }
}
</script>

<style lang="postcss" local>
@import"../style/flourish.css"
</style>

