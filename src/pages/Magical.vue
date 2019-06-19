<template>
<div>
    <Navbar/>
    <div id="shop">
    <!-- header 主視覺 -->
    <div id="showcase" class="grid">
        <div class="bg-img-magical"></div>
    </div>
    <!-- Main area -->
    <main id="main">
        <section id="section-a" class="grid">
            <div>
                <h2 class="cont-title">Magical Menagerie</h2>
                <div class="content-text">
                    <h4>"There wasn’t much room inside. Every inch of wall was hidden by cages. It was smelly and very noisy because the occupants of these cages were all squeaking, squawking, jabbering or hissing."</h4>

                </div>

            </div>
        </section>
        <!-- Goods -->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card pic1">
                        <a href=""><img src="../assets/Magical/blackcat.jpg" ></a>
                        <div class="overlay"></div>
                        <div class="info"></div>
                        <div class="card-content">
                            <h3 class="card-title">Black cat</h3>
                            <p>Black Cat is a type of cat, commonly recognised by of its black fur. It is not a particular breed of cat and may be mixed or of a specific breed.

                                Black cats are one of several species of cats available at Magical Menagerie on Diagon Alley. One could purchase one for 9 Galleons.</p>
                                <a href="#section-b" class="btn-2">Add this</a>

                        </div>


                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <a href=""><img src="../assets/Magical/frog.jpg"></a>
                        <div class="overlay"></div>
                        <div class="card-content">
                            <h3 class="card-title">Natterjack Toad</h3>
                            <p>The Natterjack Toad is a toad native to sandy and heathland areas of Europe, easily distinguishable by the yellow line down the middle of its back.

                                One could purchase a Natterjack Toad at Magical Menagerie, at Diagon Alley, for a cost of five Galleons.</p>
                                <a href="#section-b" class="btn-2">Add this</a>
                        </div>

                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <a href=""><img src="../assets/Magical/whitecat.jpg"></a>
                        <div class="overlay"></div>
                        <div class="card-content">
                            <h3 class="card-title">White cat</h3>
                            <p>White Cat is a type of cat, commonly recognised by its pure white fur. Some white cats suffer from congenital deafness caused by degeneration of the inner ear.
                                White Cat is one of several species of cats available at Magical Menagerie on Diagon Alley. </p>
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
    name: "Magical",
   components:{
    Navbar
  },
  data() {
    return {};
  }
}
</script>
<style lang="postcss">
@import"../style/magical.css"
</style>
