import Head from 'next/head'

export default function ResponsiveRedesign() {
    return(
        <>
        <Head>
            <title>Responsive Redesign</title>
        </Head>
            <div className="mainContent">
                <h1> Responsive Redesign: Ormsby's Computer Systems</h1>
                <p>
                For the reponsive redesign, I chose the website of <a href="https://ormsbyscomputer.com">Ormsby's Computer
                    Systems</a>, a local business near my hometown.
                The Original site was very basic and required a lot of scrolling to view its contents.
                </p>
                <img src="/responsive-redesign/ormsby_original.png" alt="screenshot of original website, basic layout with no styling"/>

                <p>
                Some of the most glaring problems I noticed are as follows:
                </p>
                <ul>
                <li>The layout of the site makes it so that you must scroll down past the menu items on each page, making it
                    difficult to view the content of the page itself since the menu items remain the same</li>
                <li>
                    Everything is justified to the left of the screen, and essentially in one large list which makes it difficult to
                    determine where to look for information and easily scan since everything is vertically stacked regardless of
                    screen size
                </li>
                <li>
                    Images are displayed inline rather than incorporated into the page itself which takes up a lot of space.
                </li>
                <li>
                    There is no padding on the sides of the pages which means on desktop, the text takes up the entire width of the
                    page
                    which makes it difficult to read when it is just one long line
                </li>
                <li>
                    Images do not resize with the window which makes the user need to scoll horizontally to view them, and viewing
                    on a mobile device is unpleasant because of this
                </li>
                <li>
                    Learnability: The site is not particularly intuitive at first glance and requires a lot of scrolling to find the
                    desired information, but after figuring out the general layout, it is not particularly difficult to find what
                    you want.
                </li>
                </ul>
                <h4>Useability:</h4>
                <p>
                The website is not as usable as it could be since horizontal space is not utilized efficiently in
                desktop mode, in tablet or mobile view, the images do not fit on the page so you need to either zoom out or
                scroll horizontally to view them. Since the images do not contain important information this isn't as much of a
                problem as it could be, but still not ideal.

                </p>
                <h4>Memorability:</h4>
                <p>
                The site is not particularly complex, so fairly easy to remember where information is stored, that
                being said, there are not many visual cues to direct your eye to important information, so a user might need to
                spend time locating information even if they have previously used the site.

                </p>
                <h4>Accessability:</h4>
                <p>
                After putting the site through WebAIM WAVE and using a screen reader with it, these were my findings: the screen
                reader experience on this page is relatively good, the only major issue is that the
                alt text on the images is the same as the links shown below the images so a screen reader repeats them twice.

                </p>
                <h3>Wireframe Mockups</h3>
                <p>
                To start the redesign, I first began by creating wireframe mockups of the new site in Balsamiq. I aimed to make
                the site more approachable by making better use of horizontal space than the original website, and adding a menu
                bar with dropdowns to easily navigate the entire site.
                </p>
                <div className="img-cont">
                    <img src="/responsive-redesign/desktop_wireframe.png" alt="wireframe mockup of the desktop view of the new site"/>
                    <p>A wireframe mockup of the desktop view</p>
                    <img src="/responsive-redesign/tablet_wireframe.png" alt="wireframe mockup of the tablet view of the new site" id="tablet"/>
                    <p>A wireframe mockup of the tablet view</p>
                    <img src="/responsive-redesign/mobile_wireframe.png" alt="wireframe mockup of the mobile view of the new site" id="mobile"/>
                    <p>A wireframe mockup of the mobile view</p>
                </div>
                <h3>Hi-Fi Mockups</h3>
                Next, I created hi-fidelity mockups of my design in Figma, as well as visual design style guide. The style guide
                displays the reusable elements of my design, such as the menu bar buttons and the box elements that make up the main
                page.

                <div className="img-cont hifi">
                    <img src="/responsive-redesign/hifi_desktop.png"/>
                    <p>A hi-fi mockup of the desktop view</p>
                    <img src="/responsive-redesign/hifi_tablet.png"/>
                    <p>A hi-fi mockup of the tablet view</p>
                    <img src="/responsive-redesign/hifi_mobile.png"/>
                    <p>A hi-fi mockup of the mobile view</p>
                    <img src="/responsive-redesign/visual_design.png"/>
                    <p>The visual design overview for my redesign</p>
                </div>
                <h3>Final Design</h3>
                <p>For the final design, I worked to create the design seen in the hi-fi mockups. The page I designed was the
                homepage of the website, featuring some recent promotions the company was having as well as some news and general
                information. You can find the link to the webpage I created <a
                    href="https://frozen-tor-44123.herokuapp.com">here</a>.</p>
                <div className="img-cont hifi">
                <img src="/responsive-redesign/desktop.png"/>
                <p>A screenshot of the desktop view of the final site</p>
                <img src="/responsive-redesign/tablet.png"/>
                <p>A screenshot of the tablet view of the final site</p>
                <img src="/responsive-redesign/mobile.png"/>
                <p>A screenshot of the mobile view of the final site</p>
                </div>
                <p>
                The final website is completely responsive to the size of the screen. You can see that as the screen width
                shrinks, the items in the grid become a single column rather than two for easy viewing, and the menu bar at the
                top of the page is hidden away into a burger menu for easy access that does not crowd the screen. While the
                original site had few accessability issues to begin with, the redesign is likewise accessable, easily navigable
                with a screen reader.
                </p>

                <h3>Final Thoughts</h3>
                <p>In this project, I was challenged to examine the flaws of a website and solve them with my own design. I
                certainly bumped up against many technical problems along the way, creating a website that is easy to navigate on
                various screen sizes was a worthy challenge, especially as I am fairly new to web development.</p>
            </div>
    <style jsx>{`
    body {
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    h1 {
        text-align: center;
    }

    a {
        color: blue;   
    }

    img {
        height: auto;
        width: 100%;
    }

    .mainContent {
        margin-right: 20%;
        margin-left: 20%;
        box-shadow: 0 10px 30px rgba(0, 0,0, 0.1);
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
    }
    .img-cont {
        text-align: center;
        font-style: italic;
    }

    .hifi img {
        width: 50%;
    }


    #mobile {
        width: 50%;
        /* margin-left: 20%; */
    }

    #tablet {
        width: 50%;
        /* margin-left: 20%; */
    }`}</style>


        </>
    )
}