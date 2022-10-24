<script>
  import logo from './assets/logos/bookwarm.png'
  import themesong from './assets/sounds/Ching Cheng Hanji - Peng Lexer Remix.mp3'

  import { Router, Route, Link } from 'svelte-navigator'
  import About from './routes/about/+page.svelte'
</script>

<Router>
  <!--Navigation Bar-->
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>

  <main>
    <!--Routes-->
    <Route path="about" component={About}/>
    
    <Route>
			<!--Logo-->
      <link rel="icon" href={logo} />
      <div>
        <img src={logo} class="logo bookwarm" alt="Bookwarm Logo" />
      </div>
    
      <!--Theme Song-->
      <div>
        <audio controls autoplay>
          <source src={themesong} type="audio/mpeg">
        </audio>
        <h5 style="text-align: left">(っ◔◡◔)っ ♥ ~một bản nhạc lofi nhẹ nhàng~ ♥</h5>
        <h5 style="text-align: right">( ͡° ͜ʖ ͡°) ♥ ~trước khi bạn khám phá thế giới kì diệu của...~ ♥</h5>
      </div>
    
      <!--Index Page-->
      <div id="index-name">
        🔥📚🔥<name>🅱𝕠ⓞ🅺ⓦ🅐Ɽ🄼</name>🔥📚🔥
      </div>
      <h2>🅱a tôi👨 nói👄, có 3️⃣ thứ quan trọng ❗ nhất 👍 trong cuộc đời🧬 bạn🙏:</h2>
      <h3>Ba👨🏽 của bạn là ai❔😤😤😤</h3>
      <h3>&emsp &emsp &emsp &emsp Bố👨🏻 của bạn là ai❓🥺🥺🥺</h3>
      <h3>&emsp &emsp &emsp &emsp &emsp &emsp &emsp &emsp Và sách📚 của bạn❓❔❓❔🧠🧠🧠</h3>
      <h2>Với tôi, sách vừa là 🅱ạn, vừa là 🅱ố*!</h2>
      <h6 style="text-align: right">Bố = Thầy😲😲😲</h6>
		</Route>
  </main>
</Router>

<style>
  .logo {
    animation: App-logo-spin infinite 4s linear;
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    pointer-events: none;
    filter: drop-shadow(0 0 2em #ff0000aa);
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>