import ConceptoBasicos from './components/ConceptoBasicos';
import SongSearch from './components/SongSearch';
import CrudApi from './components/CrudApi';

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      {/* <SongSearch /> */}
      <hr />
      <CrudApi />
      <hr />
      {/* <ConceptoBasicos /> */}
    </div>
  );
}

export default App;
