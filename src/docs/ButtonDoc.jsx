// src/docs/ButtonDoc.jsx
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Style for code

const ButtonDoc = () => {
  const buttonCode = `import Button from './components/Button';

<Button variant="primary" size="md">Primary Button</Button>
<Button variant="secondary" size="sm">Secondary Small</Button>
<Button variant="danger" size="lg">Danger Large</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button disabled>Disabled Button</Button>`;

  return (
    <div className="doc-section">
      {" "}
      {/* Use doc-section for consistent padding */}
      <h2 className="doc-title">Button Component</h2>
      <p className="doc-description">
        A versatile button component with various styles and sizes.
      </p>
      <Card title="Usage Example">
        <div className="button-example-grid">
          <Button variant="primary" size="md">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Small
          </Button>
          <Button variant="danger" size="lg">
            Danger Large
          </Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </Card>
      <Card title="Code">
        <SyntaxHighlighter language="jsx" style={docco} className="code-block">
          {buttonCode}
        </SyntaxHighlighter>
      </Card>
      <Card title="Props">
        <ul className="props-list">
          <li>
            <strong>children</strong>: ReactNode - The content inside the
            button.
          </li>
          <li>
            <strong>variant</strong>: String - ('primary' | 'secondary' |
            'danger' | 'outline' | 'ghost') - Defines the button's visual style.
            Default: 'primary'.
          </li>
          <li>
            <strong>size</strong>: String - ('sm' | 'md' | 'lg') - Defines the
            button's size. Default: 'md'.
          </li>
          <li>
            <strong>onClick</strong>: Function - Event handler for click events.
          </li>
          <li>
            <strong>className</strong>: String - Additional CSS classes for
            customization.
          </li>
          <li>
            <strong>...props</strong>: Any other standard HTML button attributes
            (e.g., `disabled`).
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default ButtonDoc;
