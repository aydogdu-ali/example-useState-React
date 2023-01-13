
import './App.css';
import UseStateBasic from './UseStateBasic'; // kullanacağımız componenti impot ediyorum.
import usestatepic from "./usestatepic.jpg"

function App() {




  
  return (
    <>
      <div className="App">UseState Hook'unun Temel Kullanımı</div>
      <UseStateBasic />
      <section className="App">
        <p> Kod Detayı</p>
        <a target="_blank" href={usestatepic}>
          <img
            className="pic"
            src={usestatepic}
            alt="picture"
            style={{ width: "350px" }}
          />
        </a>
      </section>
    </>
  );
}

export default App;
