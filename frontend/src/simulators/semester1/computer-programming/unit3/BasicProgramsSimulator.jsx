const BasicProgramsSimulator = () => {
  return (
    <div>
      <h3>🧪 Basic C Programs</h3>

      <h4>Even / Odd</h4>
      <pre className="cc-code">
{`if(n % 2 == 0)
  printf("Even");
else
  printf("Odd");`}
      </pre>

      <h4>Sum of N Numbers</h4>
      <pre className="cc-code">
{`int sum=0;
for(int i=1;i<=n;i++)
  sum += i;`}
      </pre>

      <h4>Factorial</h4>
      <pre className="cc-code">
{`int fact=1;
for(int i=1;i<=n;i++)
  fact *= i;`}
      </pre>
    </div>
  );
};

export default BasicProgramsSimulator;
