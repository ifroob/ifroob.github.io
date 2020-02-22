import React from "react";
import "../main.css";

const website = (
    <html>
        <head>
            <title>Brian's personal website.</title>
            <link rel='icon' href='/images/tennis-ball.png' />
            <meta charset='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <link rel='stylesheet' href='assets/css/main.css' />
        </head>
        <body>
            <div id='header'>
                <div class='top'>
                    <div id='logo'>
                        <span class=''>
                            <img src='images/me.jpg' alt='' />
                        </span>
                        <h1 id='title'>Brian Ta</h1>
                        <p>Software Engineer</p>
                    </div>

                    <nav id='nav'>
                        <ul>
                            <li>
                                <a
                                    href='#top'
                                    id='top-link'
                                    class='skel-layers-ignoreHref'
                                >
                                    <span class='icon fa-home'>Intro</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#portfolio'
                                    id='portfolio-link'
                                    class='skel-layers-ignoreHref'
                                >
                                    <span class='icon fa-th'>Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#about'
                                    id='about-link'
                                    class='skel-layers-ignoreHref'
                                >
                                    <span class='icon fa-user'>About Me</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#interests'
                                    id='interests-link'
                                    class='skel-layers-ignoreHref'
                                >
                                    <span class='icon fa-dribbble'>
                                        More Interests
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#contact'
                                    id='contact-link'
                                    class='skel-layers-ignoreHref'
                                >
                                    <span class='icon fa-envelope'>
                                        Contact
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class='bottom'>
                    <ul class='icons'>
                        <li>
                            <a href='#' class='icon fa-twitter'>
                                <span class='label'>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' class='icon fa-facebook'>
                                <span class='label'>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' class='icon fa-github'>
                                <span class='label'>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' class='icon fa-dribbble'>
                                <span class='label'>Dribbble</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' class='icon fa-envelope'>
                                <span class='label'>Email</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id='main'>
                <section id='top' class='one dark cover'>
                    <div class='container'>
                        <header>
                            <br />

                            <strong />
                            <h2 class='alt' style={{ color: "#00ff00" }}>
                                > Hi! I'm Brian Ta, welcome to my personal
                                website.<div class='blink_me'>▐</div>
                            </h2>
                        </header>

                        <footer>
                            <a href='#portfolio' class='button scrolly'>
                                Random Button
                            </a>
                        </footer>
                    </div>
                </section>

                <br />
                <section id='portfolio' class='two'>
                    <div class='container'>
                        <header>
                            <h2>
                                <b>Portfolio</b>
                            </h2>
                        </header>

                        <p>
                            Welcome to my personal website. This is a revamp of
                            the old website, written in ReactJS. As you can
                            tell, this website is still quite shit and not yet
                            finished!
                        </p>
                        <p>
                            You might as well go to my{" "}
                            <a href='https://www.linkedin.com/in/brian-ta'>
                                LinkedIn Profile
                            </a>{" "}
                            since there's really nothing here!
                        </p>

                        <div class='row'>
                            <div class='4u 12u$(mobile)'>
                                <header>
                                    <h2>
                                        <b>Projects</b>
                                    </h2>
                                </header>
                                <article class='item'>
                                    <a href='#' class='image fit'>
                                        <img src='images/pic02.jpg' alt='' />
                                    </a>
                                    <header>
                                        <h3>
                                            <i>0. Add projects to website!</i>
                                        </h3>
                                    </header>
                                </article>
                                <article class='item'>
                                    <a href='#' class='image fit'>
                                        <img src='images/pic03.jpg' alt='' />
                                    </a>
                                    <header></header>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='about' class='three'>
                    <div class='container'>
                        <header>
                            <h2>
                                <b>About Me</b>
                            </h2>
                        </header>
                        <a href='' class='image featured'>
                            <img src='images/skate.png' alt='' />
                        </a>
                        <p>
                            My name is Brian Ta. I am 24 years old from Fort
                            Worth, Texas. A proud Texas A&M graduate '17, now
                            working as a software engineer.
                        </p>
                        <a href='' class='image featured'>
                            <img src='images/AgRing.jpg' alt='' />
                        </a>
                        <p>
                            Throughout the years I have garnered a strong
                            interest in the field of computing -- strong enough
                            to pursue it academically. Being at engineering
                            school has not only taught me that work can get
                            increasingly difficult, but also the experience in
                            which I keep trying to better myself matters
                            profoundly.
                        </p>
                        <p>
                            I strongly believe that modern technology will be
                            able to save and improve lives very efficiently.
                            Although we have a long way to go with ethical
                            practices, the implied powers of technology is
                            simply staggering to what it has been in the past.
                        </p>
                        <iframe
                            class=''
                            src='https://embed.spotify.com/?uri=spotify%3Atrack%3A0870QNicMawQH2cnzBVZ3P'
                            allowtransparency='true'
                        ></iframe>
                        <iframe
                            class=''
                            src='https://www.youtube.com/embed/FFxeUb8Y_lY'
                            allow='autoplay; encrypted-media;'
                        ></iframe>
                    </div>
                </section>

                <section id='interests' class='four'>
                    <div class='container'>
                        <header>
                            <h2>
                                <b>More Interests</b>
                            </h2>
                        </header>
                        <p>Coming Soon!</p>

                        <form method='post' action='#'>
                            <div class='row'>
                                <div class='6u 12u$(mobile)'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                    />
                                </div>
                                <div class='6u$ 12u$(mobile)'>
                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='Email'
                                    />
                                </div>
                                <div class='12u$'>
                                    <textarea
                                        name='message'
                                        placeholder='Message'
                                    ></textarea>
                                </div>
                                <div class='12u$'>
                                    <input type='submit' value='Send Message' />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section id='contact' class='five'>
                    <div class='container'>
                        <header>
                            <h2>
                                <b>Contact</b>
                            </h2>
                        </header>
                        <p>✉️ → 9froob9@gmail.com</p>

                        <form method='post' action='#'>
                            <div class='row'>
                                <div class='6u 12u$(mobile)'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                    />
                                </div>
                                <div class='6u$ 12u$(mobile)'>
                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='Email'
                                    />
                                </div>
                                <div class='12u$'>
                                    <textarea
                                        name='message'
                                        placeholder='Message'
                                    ></textarea>
                                </div>
                                <div class='12u$'>
                                    <input type='submit' value='Send Message' />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            <div id='footer'>
                <ul class='copyright'>
                    <li>&copy; All rights reserved.</li>
                    <li>
                        Design: <a href='http://html5up.net'>HTML5 UP</a>
                    </li>
                </ul>
            </div>

            <script src='assets/js/jquery.min.js'></script>
            <script src='assets/js/jquery.scrolly.min.js'></script>
            <script src='assets/js/jquery.scrollzer.min.js'></script>
            <script src='assets/js/skel.min.js'></script>
            <script src='assets/js/util.js'></script>
            <script src='assets/js/ie/respond.min.js'></script>
            <script src='assets/js/main.js'></script>
        </body>
    </html>
);

const App = () => {
    return website;
};

export default App;
