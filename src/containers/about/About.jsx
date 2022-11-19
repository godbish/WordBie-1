import './about.css'
const About = () => {

return(
  <div className="wordbie_about" id='about'>

  <title>Portfolio website</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* ---service section start---------
  <div className="service">
    <div className="title">
      <h2>Our Services</h2>
    </div>
    <div className="box">
      <div className="card">
        <i className="fas fa-book" />
        <h5>WORD GUESSING</h5>
        <div className="pra">
          <p>RUPAK RUPAKRUPAK RUPAK RUPAKRUPAK RUPAKvRUPAK vvvRUPAKRUPAK v</p>
          <p style={{ textAlign: "center" }}>
            <a className="button" href="">
              Read More
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <i className="fas fa-dice-d20" />
        <h5>QUIZ</h5>
        <div className="pra">
          <p>
            rishi rishi rishi rishi rishi rishi rishi rishi rishi rishi rishi
            rishi{" "}
          </p>
          <p style={{ textAlign: "center" }}>
            <a className="button" href="">
              Read More
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <i className="far fa-keyboard" />
        <h5>TYPING SPEED</h5>
        <div className="pra">
          <p>
            Every website should be built with two primary goals: Firstly, it
            needs to work across all devices. Secondly, it needs to be fast as
            possible.
          </p>
          <p style={{ textAlign: "center" }}>
            <a className="button" href="">
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  </div> */}
  {/* ----Contact Me----
  <div className="contact-me">
    <p>YAAHOOO !!!!!!! </p>
    <p> LEARN WITH FUN NOW</p>
  </div> */}
  {/*----footer start-------*/}
  <footer>
    <p>WORDBIE</p>
    <p>Our social </p>
    <div className="social">
      <a href="">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="">
        <i className="fab fa-instagram" />
      </a>
      <a href="">
        <i className="fab fa-dribbble" />
      </a>
    </div>
  </footer>
< div className="Developers">
<p>Developers</p>

<div className='member 1'>
<img src={require('C:/Users/samip/OneDrive/Desktop/Project/WordBie/src/containers/about/bishal.png')} width="100px" height="100px"/>
<body>Bishal Devkota
</body>
</div>
<div className='member 2'>
<img src={require('C:/Users/samip/OneDrive/Desktop/Project/WordBie/src/containers/about/samip.png')} width="100px" height="100px"/>
<body>Samip Pokhrel
</body>
</div>
<div className='member 3'><img src={require('C:/Users/samip/OneDrive/Desktop/Project/WordBie/src/containers/about/rupak.png')} width="100px" height="100px"/>
<body>Rupak Tiwari
</body></div>
<div className='member 4'>
<img src={require('C:/Users/samip/OneDrive/Desktop/Project/WordBie/src/containers/about/rishi.png')} width="100px" height="100px"/>
<body>Rishikesh Kumar Sharma
</body>
</div>
</div>

</div>
)
}
export default About;
