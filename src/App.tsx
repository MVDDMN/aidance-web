import PageLayout from "./components/layout/PageLayout";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";

function App() {

  return (

    <PageLayout>

      <Hero />

      <Services />

      <Portfolio/>

    </PageLayout>

  );

}

export default App;