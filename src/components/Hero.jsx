import '/src/global.css'
import '/src/fanta.css'
import { Info } from 'lucide-react';

function Hero() {
  return (
    <div>
      <h1>
        Coffe tracking for Coffe<abbr title="An enthusiast or devotee">Fiends</abbr>!
      </h1>
      <div className='separate'>
          <div className='benefits-list'>
                <h3 className='font-bolder'>Try <span className='text-gradient'> Caffiend </span> and start...</h3>
                <p>✅ Tracking ever coffee</p>
                <p>✅ Measuring your blood caffeine levels</p>
                <p>✅ Costing and quantifying your addiction</p>
          </div>
          <div className='card info-card'>
            <div>
                <Info/>
                <h3>Did you know...</h3>
            </div>
            <h5>That caffeine&apos;s half-life is about 5 hours?</h5>
            <p>This means that after 5 hours, half the caffeine you consumed is still in your system, keeping you alert longer! So if you drink a cup of coffee with 200 mg of caffeine, 5 hours, later, you&apos;ll still have about 100 mg of caffeine in your system.</p>
          </div>
      </div>
    </div>
  );
}

export default Hero;
