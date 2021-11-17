import {
  Header,
  Footer,
  PublicServantConsole,
  PublicServantContributions,
} from "../components";

const ConsolePage = () => (
  <div>
    <Header activeTab="Console" />
    <PublicServantConsole />
    <PublicServantContributions />
    <Footer />
  </div>
);

export default ConsolePage;
