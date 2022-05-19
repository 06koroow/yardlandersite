import Head from 'next/head'
import Script from 'next/script'
export default function Home() {
  return (
    <>
    <Head>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yardlander</title>
  <link rel="shortcut icon" type="image/jpeg" href="#" />
 </Head>

    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#live">Live</a>
          </li>
          <li>
            <a href="#media">Media</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <div className='backgroundVideos'>
        <video
          className="desktopBackground"
          autoPlay=""
          muted=""
          loop=""
          src="../public/video/backgroundlandscape.mov"
        />
        <video
          src="../public/video/backgroundvertical.mp4"
          className="mobileBackground"
          autoPlay=""
          muted=""
          loop=""
        />
      </div>
      <div className="home" id="home">
        <h1>Yardlander</h1>
        <div className="container">
          <img src="./public/artwork.jpeg" alt="" />
        </div>
        <p>New Single Grow/Change scheduled for release 27th May!</p>
        <a
          className="presaveLink"
          href="https://distrokid.com/hyperfollow/yardlander/growchange"
        >
          Pre-Save Grow/Change Here
        </a>
        <div className="externalLinks">
          <a href="https://open.spotify.com/artist/420PkG61dGnfgkvnP3nFWN?si=fvefEpYaS-2oy2JGPeF_VQ">
            <img src="../public/spotify.svg" alt="Yardlander Spotify" />
          </a>
          <a href="https://www.instagram.com/yardlander/?hl=en">
            <img src="../public/instagram.svg" alt="Yardlander Instagram" />
          </a>
          <a href="https://www.tiktok.com/@yardlander?is_from_webapp=1&sender_device=pc">
            <img src="../public/tiktok.svg" alt="Yardlander TikTok" />
          </a>
          <a href="https://www.youtube.com/channel/UCETHPCjWcuRAfp6NU_cuQtQ">
            <img src="../public/youtube.svg" alt="Yardlander Youtube" />
          </a>
        </div>
      </div>
      <div className="live" id="live">
        <h1>
          Yardlander
          <br /> Live
        </h1>
        <div id="showContainer">
          <div className="showDetails"></div>
          <img src="../public/yardlander-shortlist_14.jpg" alt="" />
        </div>
      </div>
      <div className="media" id="media">
        <h1>Listen on Spotify:</h1>
        <iframe
          className="spotifyPlayer"
          src="https://open.spotify.com/embed/artist/420PkG61dGnfgkvnP3nFWN?utm_source=generator&theme=0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          width="100%"
          height={380}
          frameBorder={0}
        />
        <img src="../public/yardlander-shortlist_10.jpg" alt="" />
      </div>
      <div className="footer">
        <form action="./config/mailingList.db" id="mailingListForm">
          <label htmlFor="mailingList">
            Want to be first to know about live shows, releases and more? Join our
            mailing list:
          </label>
          <input type="email" id="mailingList" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
    <footer>

    </footer>
  <Script src='./api/jsfunctions' />
  <Script src='./api/submitHandler.js' />
  
  </>
  
  )
}
