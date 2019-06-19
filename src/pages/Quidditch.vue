<template>
<div>
    <Navbar/>
     <div id="shop">
    <!-- header 主視覺 -->
    <div id="showcase" class="grid">
        <div class="bg-img-quidditch"></div>
    </div>
    <!-- Main area -->
    <main id="main">
        <section id="section-a" class="grid">
            <div>
                <h2 class="cont-title">Quality Quidditch Supplies</h2>
                <div class="content-text">
                    <h4>"But Black couldn't have bought a Firebolt! He's on the run! The whole country's on the lookout for him! How could he just walk into Quality Quidditch Supplies and buy a broomstick?"</h4>

                </div>

            </div>
        </section>
        <!-- Goods -->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card pic1">
                        <a href=""><img src="../assets/Quidditch/nimbus2000.jpg"></a>
                        <div class="overlay"></div>
                        <div class="info"></div>
                        <div class="card-content">
                            <h3 class="card-title">Nimbus 2000</h3>
                            <p>The Nimbus 2000 is a broom produced by the Nimbus Racing Broom Company as part of their successful line of racing brooms. At the time of it's release in 1991, it was the fastest broomstick in production.</p>
                            <a href="#top">BUY</a>

                        </div>


                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Quidditch/nimbus2001.jpg">
                        <div class="card-content">
                            <h3 class="card-title">Nimbus 2001</h3>
                            <p>The broom itself is black and silver with revolving stirrups.[2] Despite the Firebolt being faster, the Nimbus 2001 is still used by the majority of Quidditch teams across the globe. </p>
                            <a href="#top">BUY</a>
                        </div>

                    </div>
                </li>
                <li>
                    <div class="card" style="cursor:pointer;" onclick="location.href=
                    '';">
                        <img src="../assets/Quidditch/firebolt.jpg">
                        <div class="card-content">
                            <h3 class="card-title">Firebolt</h3>
                            <p>It was the fastest at the time of its production, and was released in 1993. In time, the Firebolt broomstick was used by the Bulgarian and Irish International Quidditch Teams. The teams played on Firebolts during the 1994 Quidditch World Cup.</p>
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
    name: "Quidditch",
   components:{
    Navbar
  },
  data() {
    return {};
  }
}
</script>
<style lang="postcss">
@import "../style/quidditch.css"
</style>
