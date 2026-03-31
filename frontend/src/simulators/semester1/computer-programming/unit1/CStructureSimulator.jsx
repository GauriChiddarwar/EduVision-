const CStructureSimulator = () => {
  return (
    <div>
      <h3>📄 Basic Structure of C Program</h3>

      <pre className="cp-code">
{`#include <stdio.h>

int main() {
  printf("Hello World");
  return 0;
}`}
      </pre>

      <p className="cp-note">
        Every C program starts execution from main().
      </p>
    </div>
  );
};

export default CStructureSimulator;
