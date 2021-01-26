import Layout from "../../components/Layout";
import Head from "next/head";
import "../../styles/globals.css";

export default function Development() {
  return (
    <>
      <Head>
        <title>React Development</title>
      </Head>
      <Layout>
        <article className="prose prose-lg">
          <h1>Development: The Plant Shop</h1>
          <p>
            For this application, the goal is to implement a basic shopping
            interface which allows users to browse plants, sort them
            alphabetically, based on price (low-high or high-low) or based on
            the year they were discovered and filter them based on their plant
            family or genus. Users can add plants to their cart and view the
            total price of the items in their cart, and remove items from their
            cart. This allows for an intuitive and efficient experience as users
            can quickly sort by what is important to them and filter out results
            that are not relevant.
          </p>
          <h2>Design:</h2>
          <p>
            For the design of this site, I used the Ant design library for many
            of the components because they have a clean, minimalistic look. I
            chose to place the filtering options along the top of the page below
            the header, the main grid of items below that on the left of the
            screen, and the cart as a sidebar on the right with the total price
            displayed at the top. I chose this layout because it is easy to see
            all of the possible actions the user can take, and all of the
            important information, such as filters and the cart total are
            displayed at the top of the page. For displaying the plants, I chose
            to use cards that include the image of the plant, its name, and
            relevant fields. This creates a clean, organized viewing experience
            that allows users to quickly skim through results to find ones they
            like.
          </p>

          <h4>
            You can find the website linked{" "}
            <a href="https://blooming-tundra-32035.herokuapp.com">here.</a>
          </h4>

          <h4>
            You can find my GitHub repo linked{" "}
            <a href="https://github.com/ihiltonv/cs1300-development">here.</a>
          </h4>
        </article>
      </Layout>
    </>
  );
}
