const DecisionMakingSimulator = () => {
  return (
    <div>
      <h3>🔀 Decision Making in C</h3>

      <h4>if Statement</h4>
      <pre className="cc-code">
{`if (x > 0) {
  printf("Positive");
}`}
      </pre>

      <h4>if–else</h4>
      <pre className="cc-code">
{`if (x % 2 == 0)
  printf("Even");
else
  printf("Odd");`}
      </pre>

      <h4>if–else–if</h4>
      <pre className="cc-code">
{`if (marks >= 90)
  grade = 'A';
else if (marks >= 60)
  grade = 'B';
else
  grade = 'C';`}
      </pre>

      <h4>switch</h4>
      <pre className="cc-code">
{`switch(choice) {
  case 1: printf("Add"); break;
  case 2: printf("Sub"); break;
  default: printf("Invalid");
}`}
      </pre>
    </div>
  );
};

export default DecisionMakingSimulator;
