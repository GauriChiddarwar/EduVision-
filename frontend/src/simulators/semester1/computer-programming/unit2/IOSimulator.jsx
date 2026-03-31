const IOSimulator = () => {
  return (
    <div>
      <h3>⌨ Input & Output</h3>

      <pre className="c-code">
{`int a;
scanf("%d", &a);
printf("Value = %d", a);`}
      </pre>

      <ul className="c-list">
        <li><b>scanf()</b> – Input</li>
        <li><b>printf()</b> – Output</li>
      </ul>
    </div>
  );
};

export default IOSimulator;
