import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://www.indiatravelblog.com/images/IndiaTravelBlog.jpg"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
                The Authentic Indian Travel Blog
                <br class="hidden lg:inline-block" />
              </h1>
              <p class="mb-8 leading-relaxed">
                Planning a vacation in India? Read the true Indian travel blogs
                from the real travelers who have experienced the tourist
                destinations in the country. Follow us to learn more about the
                first-hand experience of vacation stay at various destinations
                in India. Do you like to share your vacation experience? Be a
                guest blogger with us and share your experience about any
                destinations in India. We do accept travel stories from those
                who are interested in exploring places and like to share the
                experience with the world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
