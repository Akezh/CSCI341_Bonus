import {
  BecomeMember,
  Header,
  Starter,
  Footer,
  CountriesRankings,
  DiseasesRankings,
} from "../components";

const IndexPage = () => (
  <div>
    <Header activeTab="Home" />
    <Starter />
    <CountriesRankings />
    <BecomeMember />
    <DiseasesRankings />
    <Footer />
  </div>
);

export default IndexPage;
