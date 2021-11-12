import {
  Header,
  Footer,
  CountriesTableFilter,
  PublicServantConsole,
  SingleCountrySearch,
} from "../components";

const CountriesPage = () => (
  <div>
    <Header activeTab="Countries" />
    <CountriesTableFilter />
    <SingleCountrySearch />
    <PublicServantConsole />
    <Footer />
  </div>
);

export default CountriesPage;
