import PageLayout from "./components/layout/PageLayout";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import About from "./components/sections/About";

function App() {

  return (

    <PageLayout>

      <Hero />

      <Services />

      <Portfolio/>

      <Process />

      <About />

    </PageLayout>

  );

}

export default App;