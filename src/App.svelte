<script>
  import { Router, Route, Link } from "svelte-navigator";
  import About from "./routes/about/+page.svelte";
  import Authors from "./routes/authors/+page.svelte";
  import Books from "./routes/books/+page.svelte";
  import Publishers from "./routes/publishers/+page.svelte";
  import Categories from "./routes/categories/+page.svelte";
  import Newsfeed from "./routes/newsfeed/+page.svelte";
  import Users from "./routes/users/+page.svelte";
  
  import logo from "./assets/logos/bookwarm.png";
  import themesong from "./assets/sounds/Ching Cheng Hanji - Peng Lexer Remix.mp3";
</script>

<Router>
  <!--Navigation Bar-->
  <div class="navbar">
    <Link to="/" title="Về trang chủ">Trang chủ</Link>
    <Link to="newsfeed" title="Về bảng tin">Bảng tin</Link>
    <Link to="about" title="Về thông tin website">Thông tin website</Link>
    <Link to="users" title="Về tài khoản">Tài khoản</Link>

    <Link to="authors" title="Thông tin tác giả">Tác giả</Link>
    <Link to="books" title="Thông tin sách">Sách</Link>
    <Link to="publishers" title="Thông tin nhà xuất bản">Nhà xuất bản</Link>
    <Link to="categories" title="Thông tin thể loại sách">Thể loại sách</Link>
  </div>

  <main>
    <!--Routes-->
    <Route path="about" component={About} />
    <Route path="authors" component={Authors} />
    <Route path="books" component={Books} />
    <Route path="publishers" component={Publishers} />
    <Route path="categories" component={Categories} />
    <Route path="newsfeed" component={Newsfeed} />
    <Route path="users" component={Users} />

    <Route>
      <!--Logo-->
      <link rel="icon" href={logo} />
      <div>
        <img src={logo} class="logo bookwarm" alt="Bookwarm Logo" />
      </div>

      <!--Theme Song-->
      <div>
        <audio controls autoplay>
          <source src={themesong} type="audio/mpeg" />
        </audio>
        <h5><i>Theme Song: Ching Cheng Hanji - Peng Lexer Remix</i></h5>
        <h5 style="text-align: left">
          (っ◔◡◔)っ ♥ ~một bản nhạc lofi nhẹ nhàng~ ♥
        </h5>
        <h5 style="text-align: right">
          ( ͡° ͜ʖ ͡°) ♥ ~trước khi bạn khám phá thế giới kì diệu của...~ ♥
        </h5>
      </div>

      <!--Index Page-->
      <div id="index-name">
        🔥📚🔥<name>🅱𝕠ⓞ🅺ⓦ🅐Ɽ🄼</name>🔥📚🔥
      </div>
      <h2>
        🅱a tôi👨 nói👄, có 3️⃣ thứ quan trọng ❗ nhất 👍 trong cuộc đời🧬 bạn🙏:
      </h2>
      <h3>Ba👨🏽 của bạn là ai❔😤😤😤</h3>
      <h3>&emsp &emsp &emsp &emsp Bố👨🏻 của bạn là ai❓🥺🥺🥺</h3>
      <h3>
        &emsp &emsp &emsp &emsp &emsp &emsp &emsp &emsp Và sách📚 của
        bạn❓❔❓❔🧠🧠🧠
      </h3>
      <h2>Với tôi, sách vừa là 🅱ạn, vừa là 🅱ố*!</h2>
      <h6 style="text-align: right">Bố = Thầy😲😲😲</h6>
    </Route>

    <script>
      

      // create the connection to database
      const connection = createConnection({
        host: 'localhost',
        user: 'root',
        database: 'bookwarmdb'
      });

      // simple query
      connection.query(
        'SELECT name FROM categories',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
    </script>
  </main>
</Router>

<style>
  .logo {
    animation: App-logo-spin infinite 5s linear;
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    pointer-events: none;
    filter: drop-shadow(0 0 2em #ff0000aa);
    position: relative;
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
