import Header from "@/components/header"
import Button from "@/components/UI/button"


export default function Home() {
  return (
    <div id="app">
      <Header></Header>

      <div className="hero__section">
        <p className="hero__section__text">Instantly convert currencies with real-time rates and set conversions for specific times. Stay up-to-date and plan your exchanges with confidence.</p>
        <Button className="Button" content="Konvert!"></Button>
      </div>
    </div>
  );
}


