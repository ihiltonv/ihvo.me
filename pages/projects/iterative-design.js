import Head from 'next/head'

export default function IterativeDesign() {
    return (
    <>
        <Head>
            <title>Iterative Design</title>
        </Head>
        <body>
            <section id="section-main-title">
                <div className="container">
                    <h1 id="main-title">Iterative Design</h1>
                    <h2 id="main-subtitle">Hellosaurus</h2>
                </div>
            </section>

            <span id="mobile-warning">This document is best viewed in desktop/tablet mode.</span>

            <section id="section-overview">
                <div class="container">
                    <h2 class="section-title">Overview</h2>
                    <p class="text">
                        Iterative design is a design methodology based on a cyclic process of prototyping, testing, analyzing,
                        and refining a product.
                        As part of a UIUX course project, we, a group of 4 students, designed an emerging startup interface
                        using this approach.
                    </p>
                    <p class="text">
                        The startup we focused on is Hellosaurus.
                        It is an interactive video platform for children who can play with episodes instead of just watching.
                        Since these videos are better viewed on bigger screens, and kids are likely to have better access to
                        laptops than tablets or phones, we chose laptops as our interface.
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="section-title">Sketches</h2>
                    <p className="text text-pad">
                        Before creating a prototype, we brainstormed a couple of different possible designs that our interface
                        could incorporate.
                        The following images are some of the many sketches we drew:
                    </p>
                    <div className="row">
                        <div className="row">
                            <div className="column">
                                <img src="/iterative-design/sketches/isaac/video_suggestions.png"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/isaac/video_ui_bottom.png"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/isaac/video_no_ui.png"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src="/iterative-design/sketches/david/sketch_dashboard_home.png"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/david/sketch_dashboard_medals.png"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/david/sketch_dashboard_explore.png"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src="/iterative-design/sketches/koyena/landing_page.jpg"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/koyena/sign_up_page.jpg"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/koyena/video_player_page.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src="/iterative-design/sketches/andrew/Andrew_Sketch_1.jpg"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/andrew/Andrew_Sketch_2.jpg"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/andrew/Andrew_Sketch_3.jpg"/>
                            </div>
                            <div className="column">
                                <img src="/iterative-design/sketches/andrew/Andrew_Sketch_4.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="section-title">Low-Fi Prototype</h2>
                    <p className="text">
                        Since most users are going to be kids, we wanted to make our interface as kid-friendly as possible.
                        We aimed to create a playful interface with more images and less text so that kids can quickly identify
                        buttons
                        or contents. Therefore, we chose to keep UI elements that are essential, affordable, and relatable.
                        One of the creative ideas we thought of was to implement "medals" as part of a kid's reward program.
                        We are creating interface kids that might be used to - for instance, through gaming apps or other
                        in-person activities!
                    </p>
                    <p className="text">
                        With these considerations, we created the following low-fidelity prototype:
                    </p>
                    <h3 className="subsection-title">Landing Page</h3>
                    <div className="row">
                        <div className="column">
                            <img src="/iterative-design/lowfi/koyena/home_page_iPad.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/koyena/home_page_iPhone.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/koyena/home_page_website.png"/>
                        </div>
                    </div>
                    <h3 className="subsection-title">Video Player</h3>
                    <div className="row">
                        <div className="column">
                            <img src="/iterative-design/lowfi/isaac/video_with_ui_left.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/isaac/video_suggestions.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/isaac/video_no_ui.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/isaac/video_with_ui_bottom.png"/>
                        </div>
                    </div>
                    <h3 className="subsection-title">Sign Up Page</h3>
                    <div className="row">
                        <div className="column">
                            <img src="/iterative-design/lowfi/andrew/Desktop 1.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/andrew/Desktop 2.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/andrew/Desktop 3.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/andrew/Desktop 4.png"/>
                        </div>
                    </div>
                    <h3 className="subsection-title">Dashboard Home</h3>
                    <div className="row">
                        <div className="column">
                            <img src="/iterative-design/lowfi/david/DB_Home_Desktop.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/david/DB_Home_Mobile.png"/>
                        </div>
                    </div>
                    <h3 className="subsection-title">Dashboard Medals</h3>
                    <div className="row">
                        <div className="column">
                            <img src="/iterative-design/lowfi/david/DB_Medals_Desktop.png"/>
                        </div>
                        <div className="column">
                            <img src="/iterative-design/lowfi/david/DB_Medals_Mobile.png"/>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <h2 className="section-title">Interactive High-Fi Prototype</h2>
                    <h3 className="subsection-title">Mockup Critique</h3>
                    <p className="text">
                        For the mockup critique, users generally liked the playful design and felt it was
                        well-suited for kids. In particular, users felt that the use of more colors was a positive
                        feature and would make the site more attractive for kids.
                    </p>
                    <p className="text">
                        Users felt that the "Keep Watching" button should not lead to sign up pages, which felt
                        a little jarring. Similarly, returning users found it hard to find a "Log In" button which was
                        not explicitely displayed.
                    </p>
                    <p className="text">
                        For the video player pages, users felt that they needed a bit more consistency regarding how and
                        where the options to interact with the video are displayed. They mostly preferred them to be
                        on the bottom below the video instead of to the side. On the side, it made the "Back Button" seem like a
                        button
                        for hiding the options instead of going back to the previous page.
                    </p>
                    <h3 className="subsection-title">Final Version</h3>
                    <p className="text-pad">
                        This prototype is <b>interactive - try clicking around!</b>
                    </p>
                    <iframe className="prototype"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlRHeS1ZfvLgtKjByLyo8sM%2FHellosaurus-group-wireframing-st.-Nov-3%3Fnode-id%3D263380%253A462%26viewport%3D-1708%252C-778%252C0.34408414363861084%26scaling%3Dscale-down-width"
                        allowfullscreen></iframe>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="section-title">User Testing</h2>
                    <p className="text">
                        Our user testing fell into two groups: the first two people to test our site had trouble navigating the
                        sign up process because the "Next" button that was at the bottom-right corner of the screen was not
                        visible without scrolling. This was a flaw in the prototype because we used a screen with a 16:10 aspect
                        ratio, such as a Macbook Pro, but our users were using a screen with a 16:9 aspect ratio. This showed us
                        that it was important to make sure we design the site in such a way that all of the UI elements are
                        visible without scrolling, which we thought we had done in our prototype but unfortunately was not the
                        case on our users screens. The final user had only positive feedback, praising the large text, colorful
                        design, large buttons, and good contrast of the elements. They even stated at one point "I did not have
                        any questions or any confusion at any point navigating this website" and "I wish all websites were like
                        this."
                    </p>
                    <p className="text">
                        Between these tests, we were left with very little negative feedback other than making a change to the
                        way the prototype was displayed to ensure that the entire vertical view would fit on the screen so that
                        users could navigate the sign up process with ease.
                    </p>
                    <p className="text">Below are two of our user testing screen recordings. The first is the one where the user is
                        successful in navigating the site, the second is where the user struggles to make it through the sign up
                        process.</p>
                    <iframe src="https://drive.google.com/file/d/1l_pe0RtIxBwuD3m1FOv5-anKaTU1-bXV/preview" className="videoEmbed">
                    </iframe>
                    <iframe src="https://drive.google.com/file/d/1Q6ilnm7kFw7ARxMQk5RmVSxz2DU-7gYU/preview" className="videoEmbed">
                    </iframe>

                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="section-title">Takeaways</h2>
                        <ul>
                            <li className="text">
                                No matter how many users you have, you still might not have the whole picture. This is why 
                                continuous user testing is so important!
                            </li>
                            <li className="text">
                                Sometimes very small details can make a large difference in the user experience.
                            </li>
                            <li className="text">
                                What separates good products from great ones are often final UI polishes and not cutting 
                                any corners in the design process.
                            </li>
                        </ul>
                </div>
            </section>
        </body>
        <style jsx>{`
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            /* background-color: #00A7EF; */
            color: rgb(39, 39, 44);
            background: #fcf3d5;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .container {
            margin-left: 10%;
            margin-right: 10%;
            /* background-color: #FFF4CD; */
            display: flex;
            flex-direction: column;
        }
        
        .container > p {
            align-self: center;
        }
        
        section {
            padding: 25px 0 47.5px 0;
            border-bottom: 1px solid #c0b083;
            display: flex;
            flex-direction: column;
        }

        #section-overview {
            margin-left: 10%;
            margin-right: 10%;
        }
        
        section#section-main-title {
            /* background: #015c99; */
            background: rgba(56, 29, 121, 1.0);
            color: #fcf3d5;
            border-bottom: 10px solid #816EBA;
        }
        
        #main-title, #main-subtitle {
            align-self: center;
        }
        
        #main-title {
            font-size: 36px;
            margin: 40px 0 10px 0;
        }
        
        #main-subtitle {
            font-size: 24px;
            margin: 0 0 15px 0;
        }
        
        .section-title, .subsection-title {
            text-align: center;
        
        }
        
        .section-title, .subsection-title { padding: 3.75px 0 }
        
        .text, ul {
            align-self: center;
            width: 100%;
            max-width: 900px;
            /* margin-left: 5%; */
            /* margin-right: 5%; */
            line-height: 1.5rem;
        }

        .text-pad {
            margin-bottom: 15px
        }
        
        .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        
        .column {
            flex-basis: 100%;
            margin-left: 1%;
            margin-right: 1%;
        }
        
        .column img {
            height: auto;
            width: 100%;
        }
        
        img {
            border:1px solid #021a40;
        }
        
        .videoEmbed {
            width: 600px;
            height: 338px;
            align-self: center;
            margin-bottom: 20px;
        }
        
        @media screen and (min-width: 768px) {
            .column {
                flex: 1;
            }
        }
        
        
        iframe.prototype {
            border: 3px solid rgba(0, 0, 0, 0.4); 
            width: 80%;
            height: auto;
            min-height: 460px;
            align-self: center;
        }
        
        /* ————————————————————————————————————————————————————————— */
        /* Responsive */
        
        #mobile-warning {
            color: rgb(156, 18, 18);
            font-size: 18px;
            font-weight: 600;
            padding: 20px 0 0;
            text-align: center;
            
            display: none;
        }
        
        @media screen and (max-width: 767px) {
            .container {
                margin: 0 20px;
            }
            .text {
                margin-left: 0;
                margin-right: 0;
            }
            #mobile-warning {
                display: block;
            }
        }
        `}</style>
        </>
    )
}