import Head from 'next/head'
//import Image from 'next/image'


import javascript from '../../src/jsfunctions.js'
import submitHandler from '../../src/submitHandler.js'
//import YLImage1 from '../public/img/yardlander-shortlist_10.jpg'
//import YLImage2 from '../public/img/yardlander-shortlist_14.jpg'
//import instagram from '../public/SVG/instagram.svg'
//import spotify from '../public/SVG/spotify.svg'
//import tiktok from '../public/SVG/tiktok.svg'
//import youtube from '../public/SVG/youtube.svg'
//import artwork from '../public/img/artwork.jpeg'


export default function Home() {
  return (
    <>
    <Head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yardlander</title>
    <link rel="shortcut icon" type="image/jpeg" href="SVG/logofavicon" />
    
    </Head>

    <header className="header nav-scrolled">
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
          autoPlay
          muted
          loop
          src="video/backgroundlandscape.mov"
        />
        <video
          src="video/backgroundvertical.mp4"
          className="mobileBackground"
          autoPlay=""
          muted=""
          loop=""
        />
      </div>
      <div className="home section" id="home">
        <h1>Yardlander</h1>
        <div className="container">
          <picture>
            <img src='img/artwork.jpeg' alt="" />
          </picture>
        </div>
        <p>New Single Grow/Change Out Now!</p>
        <a
          className="presaveLink"
          href="https://distrokid.com/hyperfollow/yardlander/growchange"
        >
          Listen to Grow/Change on all major streaming services!
        </a>
        <div className="externalLinks">
          <a href="https://open.spotify.com/artist/420PkG61dGnfgkvnP3nFWN?si=fvefEpYaS-2oy2JGPeF_VQ">
            <picture>
              <img src="SVG/spotify.svg" alt="Yardlander Spotify" />
            </picture>
          </a>
          <a href="https://www.instagram.com/yardlander/?hl=en">
            <picture>
              <img src="SVG/instagram.svg" alt="Yardlander Instagram" />
            </picture>
          </a>
          <a href="https://www.tiktok.com/@yardlander?is_from_webapp=1&sender_device=pc">
            <picture>
              <img src="SVG/tiktok.svg" alt="Yardlander TikTok" />
            </picture>
          </a>
          <a href="https://www.youtube.com/channel/UCETHPCjWcuRAfp6NU_cuQtQ">
            <picture>
              <img src="SVG/youtube.svg" alt="Yardlander Youtube" />
            </picture>
          </a>
        </div>
      </div>
      <div className="live section" id="live">
        <h1>
          Live
        </h1>
        <div id="showContainer">
          <div className="showDetails"></div>
          <picture>
            <img src="img/yardlander-shortlist_14.jpg" alt="" />
          </picture>
        </div>
      </div>
      <div className="media section" id="media">
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
        <picture>
          <img src="img/yardlander-shortlist_10.jpg" alt="" />
        </picture>
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
  </>
  
  )
}
