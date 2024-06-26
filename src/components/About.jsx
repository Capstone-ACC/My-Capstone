import "./css/About.css";

export default function About() {
  return (
    <>
      <main className="ourStory-container">
        <img src="/images/shopping.jpg" className="shoppingImg" alt="Girls looking at a white shirt" />
        <h6>About Us</h6>

        <article className="about">
          <section>
            Tech & Styles is a place where our love for Technology and Styling
            come together, for the ultimate shopping experience. Starting off as
            a small family business, we have transformed the Tech Community by
            bringing together our love for fashion and technology. We knew from
            the very beginning we were going to be a hit. Customers from all
            over the World come to visit us, to shop the latest trends and
            purchase a brand new computer monitor at the same time. We are a
            full E-Commerce Website but have a home store in the heart of
            Dallas, Texas. We are starting to open stores across the United
            States.
          </section>

          <br />
          <br />

          <section>
            This site allows you to show all the products we have available for
            purchase, select a product and view its details. We also have the
            option to sign into your account and purchase the products in your
            cart. You are also able purchase products for a local Donation
            Center. If you are a new customer, you are able to Register for an
            account, and receive 50% off. Explore our site, and search for your
            favorite Tech & Styles!
          </section>

          <img src="/images/macBookImg.jpg" className="macBook" alt="Mac Laptop, with background image of the sea and mountains"/>
        </article>
      </main>
    </>
  );
}
