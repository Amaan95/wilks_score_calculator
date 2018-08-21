import Header from '../components/Header'
import Card from '../components/Card'
import ResultCard from '../components/Result'

const Index = () => (
  <React.Fragment>
    <Header />
    <body>
        <Card card_title="Wilks Score Calculator" />
        <ResultCard />
    </body>
  </React.Fragment>
);

export default Index
