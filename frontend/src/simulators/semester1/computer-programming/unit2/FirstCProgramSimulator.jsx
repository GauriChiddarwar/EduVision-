const FirstCProgramSimulator = () => {
  return (
    <div>
      <h3>🧪 First C Program</h3>

      <pre className="c-code">
{`#include <stdio.h>

int main() {
  printf("Hello World");
  return 0;
}`}
      </pre>

      <p className="c-note">
        Execution always starts from <b>main()</b>.
      </p>
    </div>
  );
};

export default FirstCProgramSimulator;
