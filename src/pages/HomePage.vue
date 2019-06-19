<template>
  <div>
    <Navbar/>
    <div class="diagonalley" id="diagonalley">
      <h1>Diagon Alley</h1>
     <br>
    <a href="#a">Press here if you aren't a Muggle.</a> 
     
    </div>
    <div class="background">
     <a name='a'></a>
      <div id="flourish" class="flourish">
        <div class="img1">
          <router-link to="/Flourish">
            <img src="../assets/Flourish & Blotts Logo@4x-100.jpg">
          </router-link>
        </div>
        <div class="shopintro1">
          <div class="word">
            <div class="shoptitle">
             <router-link to="/Flourish"> Flourish & Blotts </router-link>
            </div>
            <p>
            
              A good bookshop is something to treasure and, despite being in the wizarding world, Flourish and Blotts was no different. A dusty treasure trove of literature, it was absolutely
              perfect for any budding wizard hoping to catch up on their reading.
            </p>
          </div>
        </div>
      </div>

      <div id="ollivanders" class="ollivanders">
        <div class="img2">
          <router-link to="/Magical">
            <img src="../assets/Ollivanders Logo@4x-100.jpg" width="100%">
          </router-link>
        </div>
        <div class="shopintro2">
          <div class="word">
            <div class="shoptitle"><router-link to="/Magical">
              Ollivanders</router-link>
       
            </div>
            <p>
              The wand chooses the wizard.
           
              <br>Considered by many to be the world's best wandmaker, almost everyone at Hogwarts gets their wands here.
            </p>
          </div>
        </div>
      </div>

      <div id="weasleys" class="weasleys">
        <div class="img3">
          <router-link to="/Weasleys">
            <img src="../assets/Weasleys' Wizard Wheezes Logo@4x-100.jpg" width="100%">
          </router-link>
        </div>
        <div class="shopintro1">
          <div class="word">
            <div class="shoptitle">
           <router-link to="/Weasleys">   Weasleys' Wizard Wheezes</router-link>
           
            </div>
            <p>
              A new joke shop in town.
              <br>
              <br>If anyone fancies buying a Portable Swamp, as demonstrated upstairs, come to number ninety-three, Diagon Alley.
            </p>
          </div>
        </div>
      </div>

      <div id="eeylops" class="eeylops">
        <div class="img4">
          <router-link to="/Owl">
            <img src="../assets/owllogo@4x-100.jpg" width="100%">
          </router-link>
        </div>
        <div class="shopintro2">
          <div class="word">
            <div class="shoptitle"><router-link to="/Owl">
              Eeylops Owl Emporium</router-link>
           
            </div>
            <p>
              Need someone to send letters? You've come to the right place.
              <br>
              <br>It is possible to protect yourself from all correspondence, or all but that carried by a specific owl. So get your own personal owl!
            </p>
          </div>
        </div>
      </div>

      <div id="quidditch" class="quidditch">
        <div class="img5">
          <router-link to="/Quidditch">
            <img src="../assets/Quality Quidditch Supplies Logo@4x-100.jpg" width="100%">
          </router-link>
        </div>
        <div class="shopintro1">
          <div class="word">
            <div class="shoptitle"><router-link to="/Quidditch">
              Quality Quidditch Supplies</router-link>
              
            </div>
            <p>
              Wanna look sharp in Quidditch, get a firebolt.
              <br>Quality Quidditch Supplies was Harry Potter’s favourite shop in Diagon Alley. He visited it often when he stayed for three weeks at the Leaky Cauldron, since that summer the new
              Firebolt racing broom had been introduced and the shop had one on display.
            </p>
          </div>
        </div>
      </div>
    </div>
<footer id="main-footer">
            
                <h3>But know this the ones that love us never really leave us. And you can always find them in here.</h3>
                <a href="#top">GO TO TOP</a>
          <br>
          <br>
          <br>
        <div>Alice is a stupid muggle</div>
       

    </footer>
  </div>

</template>

<script>
import Navbar from  './Navbar'
export default {
  name: "HomePage",
   components:{
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" local>
@import "../style/home.css";
</style>
