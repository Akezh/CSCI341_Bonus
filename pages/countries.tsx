import {
  Header,
  Footer,
  CountriesTableFilter,
  SingleCountrySearch,
} from "../components";

const CountriesPage = () => (
  <div>
    <Header activeTab="Countries" />
    <CountriesTableFilter />
    <SingleCountrySearch />
    <Footer />
  </div>
);

export default CountriesPage;
