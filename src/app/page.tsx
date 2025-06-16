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
      icon: "⚡",
      title: "Recursive Pattern",
      description:
        "The same patterns and physical laws replicate across all levels of the simulation hierarchy.",
    },
  ];

  const implications: ImplicationItemProps[] = [
    {
      icon: "🤔",
      title: "The Bootstrap Paradox",
      description:
        'If all universes are simulations, what was the original "real" universe that started the chain?',
    },
    {
      icon: "🎯",
      title: "Purpose & Meaning",
      description:
        "Does consciousness and experience retain meaning if it exists within a simulation?",
    },
    {
      icon: "🔍",
      title: "Detection Impossibility",
      description:
        "Beings within a simulation may never be able to prove they're simulated.",
    },
    {
      icon: "🌌",
      title: "Infinite Hierarchy",
      description:
        "There could be countless levels of reality above and below our perceived universe.",
    },
    {
      icon: "🧠",
      title: "Consciousness Nature",
      description:
        'Questions whether simulated consciousness is equivalent to "natural" consciousness.',
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
          through simulation technology, and those child universes eventually
          develop the ability to create their own simulations, perpetuating an
          endless cycle of nested realities.
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
        <h2 className={styles.implicationsTitle}>Philosophical Implications</h2>
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

*/
