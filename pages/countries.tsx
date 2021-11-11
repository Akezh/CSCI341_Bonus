import {
  BecomeMember,
  Header,
  Footer,
  CountriesTableFilter,
  DiseasesRankings,
} from "../components";

const CountriesPage = () => (
  <div>
    <Header activeTab="Countries" />
    <CountriesTableFilter />
    <BecomeMember />
    <DiseasesRankings />
    <Footer />
  </div>
);

export default CountriesPage;
