import { useState } from "react";
import "./styles.css";
import Tab from "./components/Tab";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <Tab
            isActiveCondition={activeContentIndex === 0}
            onClick={() => setActiveContentIndex(0)}
            text="Why React?"
          />
          <Tab
            isActiveCondition={activeContentIndex === 1}
            onClick={() => setActiveContentIndex(1)}
            text="Core Features"
          />
          <Tab
            isActiveCondition={activeContentIndex === 2}
            onClick={() => setActiveContentIndex(2)}
            text="Related Resources"
          />
          <Tab
            isActiveCondition={activeContentIndex === 3}
            onClick={() => setActiveContentIndex(3)}
            text="Fourth Tab"
          />
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
