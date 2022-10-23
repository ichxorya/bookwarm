<script>
  import logo from './assets/logos/bookwarm.png'
  import themesong from './assets/sounds/Ching Cheng Hanji - Peng Lexer Remix.mp3'
  import Counter from './lib/Counter.svelte'
  import Newsfeed from './routes/newsfeed/+page.svelte'

  let bgImage = './assets/backgrounds/book_burning_wiki.jpg'
</script>

<main>
  <link rel="icon" href={logo} />
  <div>
    <img src={logo} class="logo bookwarm" alt="Bookwarm Logo" />
  </div>

  <div>
    <audio controls autoplay>
      <source src={themesong} type="audio/mpeg">
    </audio>
    <h5 style="text-align: left">(っ◔◡◔)っ ♥ ~một bản nhạc lofi nhẹ nhàng~ ♥</h5>
    <h5 style="text-align: right">trước khi bạn khám phá thế giới kì diệu của...</h5>
  </div>

  <h1>🅱𝕠ⓞ🅺ⓦ🅐Ɽ🄼</h1>
  <h2>🅱a tôi👨 nói👄, có 3️⃣ thứ quan trọng ❗ nhất 👍 trong cuộc đời🧬 bạn🙏:</h2>
  <h3>Ba👨🏽 của bạn là ai❔😤😤😤</h3>
  <h3>&emsp &emsp &emsp &emsp Bố👨🏻 của bạn là ai❓🥺🥺🥺</h3>
  <h3>&emsp &emsp &emsp &emsp &emsp &emsp &emsp &emsp Và sách📚 của bạn❓❔❓❔🧠🧠🧠</h3>
  <h2>Với tôi, sách vừa là 🅱ạn, vừa là 🅱ố*!</h2>
  <h6 style="text-align: right">Bố = Thầy😲😲😲</h6>

  <div class="card">
    <Counter/>
  </div>

</main>

<style>
  .card {
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin: 0 auto;
    max-width: 240px;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

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