// src/App.js
import React from "react";
import "./App.scss";
import Header from "./component/header/header";
import Introduction from "./component/introduction/introduction";
import Skills from "./component/skills/skills";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import Social from "./component/Social/social";

const App = () => {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <section id="home" >
        <Introduction></Introduction>
        </section>
        <section id="skills" >
        <Skills></Skills>
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
        <section>
          <Social />
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
