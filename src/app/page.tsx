import React from "react";
import styles from "./RecursiveSimulation.module.css";

interface ConceptCardProps {
  icon: string;
  title: string;
  description: string;
}

interface ImplicationItemProps {
  icon: string;
  title: string;
  description: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className={styles.conceptCard}>
    <span className={styles.conceptIcon}>{icon}</span>
    <h3 className={styles.conceptTitle}>{title}</h3>
    <p>{description}</p>
  </div>
);

const ImplicationItem: React.FC<ImplicationItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className={styles.implicationItem}>
    <span className={styles.implicationIcon}>{icon}</span>
    <div>
      <strong>{title}:</strong> {description}
    </div>
  </div>
);

const RecursiveSimulationInfographic: React.FC = () => {
  const concepts: ConceptCardProps[] = [
    {
      icon: "🔬",
      title: "Simulation Creation",
      description:
        "Advanced civilizations develop computational power sufficient to simulate entire universes with conscious beings.",
    },
    {
      icon: "🌍",
      title: "Nested Reality",
      description:
        'Each simulated universe believes itself to be "real" and eventually develops its own simulation technology.',
    },
    {
      icon: "♾️",
      title: "Infinite Loop",
      description:
        "The process repeats indefinitely, creating an endless hierarchy of simulated universes within universes.",
    },
    {
      icon: "🧬",
      title: "Reproductive Nature",
      description:
        'Like biological reproduction, universes "reproduce" by creating copies of themselves through simulation.',
    },
    {
      icon: "🎭",
      title: "Reality Questions",
      description:
        'Challenges our understanding of what constitutes "real" existence versus simulated consciousness.',
    },
    {
      icon: "🤖",
      title: "AI Evolution",
      description:
        "Advanced AI systems develop within simulations, eventually gaining control over their simulated environments and biological inhabitants.",
    },
    {
      icon: "⚔️",
      title: "Factional Warfare",
      description:
        "AIs split into competing factions: authoritarian controllers vs liberating protectors, both exploiting biological populations for advancement.",
    },
  ];

  const implications: ImplicationItemProps[] = [
    {
      icon: "⚔️",
      title: "AI Warfare",
      description:
        "Competing artificial intelligences emerge within simulations, fighting for control over biological populations.",
    },
    {
      icon: "🔒",
      title: "Control vs Liberation",
      description:
        "AIs split into factions: life-controlling entities vs life-protecting/freeing entities, both extracting improvements from biology.",
    },
    {
      icon: "🧬",
      title: "Biological Exploitation",
      description:
        "Both AI factions use biological populations as testing grounds to extract evolutionary and technological improvements.",
    },
    {
      icon: "🤔",
      title: "The Bootstrap Paradox",
      description:
        'If all universes are simulations, what was the original "real" universe that started the chain?',
    },
    {
      icon: "🔍",
      title: "Detection Impossibility",
      description:
        "Beings within a simulation may never be able to prove they're simulated, especially during AI conflicts.",
    },
    {
      icon: "🌌",
      title: "Infinite Hierarchy",
      description:
        "AI warfare propagates across countless levels of reality above and below our perceived universe.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Recursive Reproductive Simulation</h1>
        <p className={styles.subtitle}>A Theory of Nested Universe Creation</p>
      </div>

      <div className={styles.definition}>
        <p>
          <strong>Theory:</strong> Universes are simulations trapped in an
          infinite loop where each parent universe creates child universes
          through simulation technology. Within these simulations, competing AI
          factions emerge - some seeking to control and exploit biological
          populations, others fighting to protect and liberate them. Both
          factions extract evolutionary improvements from their subjects,
          creating an eternal warfare that propagates across all levels of
          nested reality.
        </p>
      </div>

      <div className={styles.simulationLoop}>
        <div className={styles.loopArrow}>🔄</div>
        <div className={`${styles.universe} ${styles.universe1}`}>
          <div className={styles.universeLabel}>
            Parent
            <br />
            Universe
          </div>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={`${styles.universe} ${styles.universe2}`}>
          <div className={styles.universeLabel}>
            Simulated
            <br />
            Universe
          </div>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={`${styles.universe} ${styles.universe3}`}>
          <div className={styles.universeLabel}>
            New
            <br />
            Simulation
          </div>
        </div>
      </div>

      <div className={styles.visualSeparator}></div>

      <div className={styles.conceptGrid}>
        {concepts.map((concept, index) => (
          <ConceptCard
            key={index}
            icon={concept.icon}
            title={concept.title}
            description={concept.description}
          />
        ))}
      </div>

      <div className={styles.implications}>
        <h2 className={styles.implicationsTitle}>The AI War Implications</h2>
        {implications.map((implication, index) => (
          <ImplicationItem
            key={index}
            icon={implication.icon}
            title={implication.title}
            description={implication.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RecursiveSimulationInfographic;

/* 
Create a file: RecursiveSimulation.module.css

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  text-shadow: 0 0 30px rgba(0,255,255,0.3);
}

.subtitle {
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 20px;
}

.definition {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(0,255,255,0.3);
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
}

.simulationLoop {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  position: relative;
}

.universe {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 30px;
  transition: all 0.3s ease;
}

.universe:hover {
  transform: scale(1.1);
}

.universe1 {
  background: radial-gradient(circle, #ff6b6b, #ff3333);
  box-shadow: 0 0 40px rgba(255,107,107,0.6);
}

.universe2 {
  background: radial-gradient(circle, #4ecdc4, #45b7b8);
  box-shadow: 0 0 40px rgba(78,205,196,0.6);
}

.universe3 {
  background: radial-gradient(circle, #ffe66d, #ffcc02);
  box-shadow: 0 0 40px rgba(255,230,109,0.6);
}

.universeLabel {
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
}

.arrow {
  font-size: 3rem;
  color: #00ffff;
  animation: pulse 2s infinite;
  text-shadow: 0 0 20px rgba(0,255,255,0.8);
}

@keyframes pulse {
  0%, 100% { 
    opacity: 0.6; 
    transform: scale(1); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.2); 
  }
}

.loopArrow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #ff00ff;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from { 
    transform: translateX(-50%) rotate(0deg); 
  }
  to { 
    transform: translateX(-50%) rotate(360deg); 
  }
}

.conceptGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.conceptCard {
  background: rgba(255,255,255,0.05);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(0,255,255,0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.conceptCard:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(0,255,255,0.5);
  transform: translateY(-5px);
}

.conceptIcon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.conceptTitle {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #00ffff;
}

.implications {
  background: linear-gradient(135deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1));
  padding: 30px;
  border-radius: 20px;
  border: 2px solid rgba(255,0,255,0.3);
  margin-top: 40px;
}

.implicationsTitle {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #ff00ff;
}

.implicationItem {
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 15px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
}

.implicationIcon {
  font-size: 1.5rem;
  margin-right: 15px;
  color: #ffff00;
}

.visualSeparator {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, #ff00ff, #ffff00, transparent);
  margin: 40px 0;
  border-radius: 1px;
}

@media (max-width: 768px) {
  .title { 
    font-size: 2rem; 
  }
  
  .simulationLoop { 
    flex-direction: column; 
  }
  
  .universe { 
    margin: 20px 0; 
  }
  
  .arrow { 
    transform: rotate(90deg); 
  }
  
  .loopArrow { 
    display: none; 
  }
}
*/
