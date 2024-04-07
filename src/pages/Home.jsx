import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";

export function Home() {
  return ( <div className="App">
   <Perfil foto="foto" name="name" email="email"/>
  <h1>SUPABASE is COOL</h1>
  <img src={googlelogo} className="logo google" alt="React logo" />
  <div className="card">
    <button>Logout</button>
    <p>codewizardai.com</p>
  </div>
  <p className="read-the-docs">
  Supabase implements all the power of PostgreSQL
  </p>
</div>);
}
