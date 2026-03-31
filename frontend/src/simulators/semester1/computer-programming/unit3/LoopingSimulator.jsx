const LoopingSimulator = () => {
  return (
    <div>
      <h3>🔁 Looping in C</h3>

      <h4>for Loop</h4>
      <pre className="cc-code">
{`for(int i=1; i<=5; i++) {
  printf("%d", i);
}`}
      </pre>

      <h4>while Loop</h4>
      <pre className="cc-code">
{`int i = 1;
while(i <= 5) {
  printf("%d", i);
  i++;
}`}
      </pre>

      <h4>do–while Loop</h4>
      <pre className="cc-code">
{`int i = 1;
do {
  printf("%d", i);
  i++;
} while(i <= 5);`}
      </pre>
    </div>
  );
};

export default LoopingSimulator;
