// src/docs/InputDoc.jsx
import React, { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const InputDoc = () => {
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorValue, setErrorValue] = useState("This field is required.");

  const inputCode = `import Input from './components/Input';

<Input label="Your Name" placeholder="Enter your name" />
<Input label="Your Email" type="email" placeholder="email@example.com" />
<Input label="Password" type="password" placeholder="Secure password" />
<Input label="Error Example" error="This field has an error." />`;

  return (
    <div className="doc-section">
      <h2 className="doc-title">Input Component</h2>
      <p className="doc-description">
        A flexible input component for text, email, and password fields, with
        built-in labeling and error display.
      </p>

      <Card title="Usage Example">
        <div className="max-w-md mx-auto py-4">
          {" "}
          {/* max-w-md and mx-auto are still useful for centering */}
          <Input
            label="Your Name"
            id="name"
            placeholder="Enter your name"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Input
            label="Your Email"
            type="email"
            id="email"
            placeholder="email@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Secure password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Input
            label="Error Example"
            id="errorField"
            error={errorValue}
            placeholder="This field has an error."
          />
        </div>
      </Card>

      <Card title="Code">
        <SyntaxHighlighter language="jsx" style={docco} className="code-block">
          {inputCode}
        </SyntaxHighlighter>
      </Card>

      <Card title="Props">
        <ul className="props-list">
          <li>
            <strong>label</strong>: String - The label displayed above the input
            field.
          </li>
          <li>
            <strong>type</strong>: String - ('text' | 'email' | 'password' |
            ...) - The HTML input type. Default: 'text'.
          </li>
          <li>
            <strong>id</strong>: String - The HTML `id` attribute for the input
            (also used for `htmlFor` on label).
          </li>
          <li>
            <strong>name</strong>: String - The HTML `name` attribute for the
            input.
          </li>
          <li>
            <strong>value</strong>: String - The current value of the input.
          </li>
          <li>
            <strong>onChange</strong>: Function - Event handler for input
            changes.
          </li>
          <li>
            <strong>placeholder</strong>: String - The placeholder text.
          </li>
          <li>
            <strong>error</strong>: String - An error message to display below
            the input, also styles the input border red.
          </li>
          <li>
            <strong>className</strong>: String - Additional CSS classes for
            customization.
          </li>
          <li>
            <strong>...props</strong>: Any other standard HTML input attributes.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default InputDoc;
