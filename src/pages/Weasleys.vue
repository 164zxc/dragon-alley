<template>
<div>
    <Navbar/>
     <div id="shop">
    <!-- header 主視覺 -->
    <div id="showcase" class="grid">
        <div class="bg-img-weasleys"></div>
    </div>
    <!-- Main area -->
    <main id="main">
        <section id="section-a" class="grid">
            <div>
                <h2 class="cont-title"> Weasleys' Wizard Wheezes</h2>
                <div class="content-text">
                    <h4>"WHY ARE YOU WORRYING ABOUT YOU-KNOW-WHO?
YOU SHOULD BE WORRYING ABOUT U-NO-POO — 
THE CONSTIPATION SENSATION THAT'S GRIPPING THE NATION!"</h4>

                </div>

            </div>
        </section>
        <!-- Goods -->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card pic1">
                        <a href=""><img src="../assets/Weasleys/canarycreams.jpg"></a>
                        <div class="overlay"></div>
                        <div class="info"></div>
                        <div class="card-content">
                            <h3 class="card-title">Canary Creams</h3>
                            <p>They have the appearance and taste of ordinary custard creams, but when eaten, they transfigure the eater into a large canary. Within a minute, the person will moult his or her feathers and revert to normal appearance.</p>
                            <a href="#top">BUY</a>

                        </div>


                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Weasleys/fakewand.jpg">
                        <div class="card-content">
                            <h3 class="card-title">Fake Wand</h3>
                            <p>Anticipating a riot, the Ministry of Magic confiscated wands of the Holyhead Harpies and Puddlemere United fans at the gates prior to the match. However most of the fans only turned in fake wands. </p>
                            <a href="#top">BUY</a>
                        </div>

                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Weasleys/headlesshat.jpg">
                        <div class="card-content">
                            <h3 class="card-title">Headless Hat</h3>
                            <p>Headless Hats are a magical prank item created by Fred and George Weasley for their shop, Weasleys' Wizard Wheezes. They are small hats covered in pink feathers. When worn, the hat and head of the person wearing it disappears.</p>
                            <a href="#top">BUY</a>
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
    name: "Weasleys",
   components:{
    Navbar
  },
  data() {
    return {};
  }
}
</script>
<style lang="postcss">
@import "../style/weasleys.css"
</style>


