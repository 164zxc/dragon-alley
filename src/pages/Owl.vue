<template>
<div>
    <Navbar/>
       <div id="shop">
    <!-- header 主視覺 -->
    <div id="showcase" class="grid">
        <div class="bg-img-owl"></div>
        
    </div>
    <!-- Main area -->
    <main id="main">
        <section id="section-a" class="grid">
            <div>
                <h2 class="cont-title">Flourish and Blotts</h2>
                <div class="content-text">
                    <h4>"They bought Harry’s school books in a shop called Flourish and Blotts where the shelves were stacked to the ceiling with books as large as paving stones bound in leather; books the size of postage stamps in covers of silk; books full of peculiar symbols and a few books with nothing in them at all."</h4>

                </div>

            </div>
        </section>
        <!-- Goods -->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card pic1">
                        <a href=""><img src="../assets/Owls/資產 3@4x-100.jpg"></a>
                        <div class="overlay"></div>
                        <div class="info"></div>
                        <div class="card-content">
                            <h2 class="card-title">Screech owl</h2>
                            <p>Screech owls are a species of owl known for their agility. Their diet consists of rabbits, voles, rats, mice and reptiles.
The screech owl is one of several species of owls sold at Eeylops Owl Emporium. </p>
                                <a href="#section-b" class="btn-2">Add this</a>

                        </div>


                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Owls/資產 4@4x-100.jpg">
                        <div class="card-content">
                            <h2 class="card-title">Snowy owl</h2>
                            <p>A large owl of the typical owl family Strigidae. It is very recognisable due to its white feathers, yellow eyes and black beak. It is one of the largest species of owl and in North America is on average the heaviest owl species.</p>
                                <a href="#section-b" class="btn-2">Add this</a>
                        </div>

                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Owls/資產 5@4x-100.jpg">
                        <div class="card-content">
                            <h2 class="card-title">Barn owl  </h2>
                            <p>The Barn Owl is a species of owl, common in Europe, distinct for its acute sense of hearing.The barn owl is one of several species of owls sold at Eeylops Owl Emporium.</p>
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

<style lang="postcss" scoped>
@import"../style/owl.css"
</style>



