
import './App.css';

function App() {
  let name = "kavin"
  return (
    <div className="App">

      <User name="kavin" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZev6gcBb-vziXchSyyXHoCeFrV5-yVC_ucyov8LsE&s" />
      <User name="guru" pic="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" />
      <User name="kk" pic="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" />

    </div>
  );
}

function User({name,pic}) {
  
  return (
    <section>
      <img src={pic} alt="ll" className="aa"></img>
      <h1 className="abc"> hello, 143 {name} ❤💖</h1>
    </section > 
    
  )
}

export default App;
