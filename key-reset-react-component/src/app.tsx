import { useState } from "react";
import { Profile } from "./components/profile";
import "./app.css";

const profiles = [{ name: "John Doe" }, { name: "John Smith" }];

function App() {
  const [selectedProfile, setSelectedProfile] = useState<string>("John");

  return (
    <main className="tutorial">
      <section className="tutorial-content">
        <h1>Profiles</h1>

        <div className="tutorial-content-profiles">
          <h2>Selecte a Profile:</h2>

          <select onChange={(e) => setSelectedProfile(e.target.value)}>
            {profiles.map((profile) => (
              <option key={profile.name}>{profile.name}</option>
            ))}
          </select>
        </div>

        <Profile key={selectedProfile} name={selectedProfile} />
      </section>
    </main>
  );
}

export default App;
