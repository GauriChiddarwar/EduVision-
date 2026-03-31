const JumpStatementsSimulator = () => {
  return (
    <div>
      <h3>⏭ Jump Statements</h3>

      <h4>break</h4>
      <pre className="cc-code">
{`for(int i=1;i<=10;i++){
  if(i==5) break;
  printf("%d", i);
}`}
      </pre>

      <h4>continue</h4>
      <pre className="cc-code">
{`for(int i=1;i<=5;i++){
  if(i==3) continue;
  printf("%d", i);
}`}
      </pre>

      <h4>goto</h4>
      <pre className="cc-code">
{`goto label;
printf("Skipped");
label:
printf("Reached");`}
      </pre>

      <h4>return</h4>
      <pre className="cc-code">
{`return 0;`}
      </pre>
    </div>
  );
};

export default JumpStatementsSimulator;
