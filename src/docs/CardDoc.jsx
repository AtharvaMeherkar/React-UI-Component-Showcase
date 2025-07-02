// src/docs/CardDoc.jsx
import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CardDoc = () => {
  const cardCode = `import Card from './components/Card';
import Button from './components/Button';

<Card title="Welcome to My Card">
  <p>This is the content inside the card. It can hold any React children.</p>
  <Button size="sm">Learn More</Button>
</Card>

<Card className="bg-blue-500 text-white"> {/* Note: bg-blue-500 etc. would be custom CSS classes now */}
  <p>This card has custom background and text color via className prop.</p>
</Card>`;

  return (
    <div className="doc-section">
      <h2 className="doc-title">Card Component</h2>
      <p className="doc-description">
        A versatile container component for grouping related content, with
        built-in styling and shadow effects.
      </p>

      <Card title="Usage Example">
        <div className="card-example-grid">
          <Card title="Basic Card">
            <p className="text-gray-700">
              This is a simple card with a title and some body text.
            </p>
            <Button size="sm" className="mt-4">
              Action
            </Button>
          </Card>
          <Card title="Card with More Content">
            <p className="text-gray-700">
              You can put any React elements inside a card, including other
              components, lists, or images.
            </p>
            <ul className="props-list mt-2">
              {" "}
              {/* Reusing props-list for list styling */}
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
            <Button variant="secondary" size="sm" className="mt-4">
              More Info
            </Button>
          </Card>
          <Card title="Custom Styled Card" className="custom-gradient-card">
            {" "}
            {/* Custom class for specific styling */}
            <p className="text-lg">
              This card demonstrates how to apply custom CSS classes using the
              `className` prop, overriding default styles.
            </p>
          </Card>
        </div>
      </Card>

      <Card title="Code">
        <SyntaxHighlighter language="jsx" style={docco} className="code-block">
          {cardCode}
        </SyntaxHighlighter>
      </Card>

      <Card title="Props">
        <ul className="props-list">
          <li>
            <strong>title</strong>: String - Optional. The title displayed at
            the top of the card.
          </li>
          <li>
            <strong>children</strong>: ReactNode - The content to be rendered
            inside the card.
          </li>
          <li>
            <strong>className</strong>: String - Additional CSS classes for
            customization.
          </li>
          <li>
            <strong>...props</strong>: Any other standard HTML div attributes.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default CardDoc;
