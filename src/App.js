import "bulma/css/bulma.css";
import ProfiileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    Personal Digital Assistant
                </p>
            </div>
        </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfiileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by amazon and helps you buy things"
              ></ProfiileCard>
            </div>
            <div className="column is-4">
              <ProfiileCard
                title="Cortona"
                handle="@cortona32"
                image={CortanaImage}
                description="Cortona was created by Microsoft and helps you buy things"
              ></ProfiileCard>
            </div>
            <div className="column is-4">
              <ProfiileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was created by Apple and helps you buy things"
              ></ProfiileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
