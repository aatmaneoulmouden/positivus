import {
  CaseStudies,
  Contact,
  Cta,
  Footer,
  Header,
  Navbar,
  Partners,
  Team,
  Testimonials,
  WorkingProcess,
} from "./sections";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Partners />
      <Cta />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
