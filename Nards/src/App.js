
import './App.css';
import UpPanel1 from './components/UpPanel1/UpPanel1.tsx';
import UpPanel2 from './components/UpPanel2/UpPanel2.tsx';
import DownUpPanel from './components/DownUpPanel/DownUpPanel.tsx';
import FilterEl from './components/FilterEl/FilterEl.tsx'
import Cards from './components/Cards/Cards.tsx'
function App() {
  return (
    <div className="App">
      <UpPanel1>  </UpPanel1>
      <UpPanel2>  </UpPanel2>
      <DownUpPanel>  </DownUpPanel>
      <div className="MainSiteContainer">
        <FilterEl >  </FilterEl>
        <Cards></Cards>
        </div>
    </div>
  );
}

export default App;
