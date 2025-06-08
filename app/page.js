export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Understanding Neural Networks: A Beginner's Guide</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Neural Network?</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Think of a neural network like a digital brain. Just as our brain learns from examples, 
          a neural network is a computer program that can learn from data. It's made up of simple 
          parts working together, similar to how brain cells (neurons) work together in our heads.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Programming Languages for Neural Networks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3 text-blue-600">Python</h3>
            <p className="text-gray-700 mb-2">The most popular choice for AI/ML development.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Rich ecosystem (TensorFlow, PyTorch, Keras)</li>
              <li>Easy to learn and read</li>
              <li>Extensive documentation and community support</li>
              <li>Great for prototyping and research</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3 text-green-600">R</h3>
            <p className="text-gray-700 mb-2">Excellent for statistical computing and graphics.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Built-in statistical functions</li>
              <li>Great visualization capabilities</li>
              <li>Strong in data preprocessing</li>
              <li>Popular in academic research</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3 text-yellow-600">Julia</h3>
            <p className="text-gray-700 mb-2">High-performance numerical analysis and computational science.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Extremely fast execution</li>
              <li>Mathematical syntax like MATLAB</li>
              <li>Growing ML ecosystem</li>
              <li>Good for large-scale projects</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3 text-red-600">C++</h3>
            <p className="text-gray-700 mb-2">Best for performance-critical applications.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Maximum control over hardware</li>
              <li>Fastest execution speed</li>
              <li>Memory efficient</li>
              <li>Ideal for production deployment</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3 text-purple-600">JavaScript</h3>
            <p className="text-gray-700 mb-2">Great for web-based neural networks.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Browser-based deployment</li>
              <li>TensorFlow.js support</li>
              <li>Real-time applications</li>
              <li>Client-side ML capabilities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Building Blocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3">1. Neurons (Nodes)</h3>
            <p className="text-gray-700 mb-2">Think of neurons as workers in a factory.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Receives information (numbers)</li>
              <li>Processes it in a simple way</li>
              <li>Passes the result forward</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-3">2. Weights</h3>
            <p className="text-gray-700 mb-2">Weights are like importance scores. They decide:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>How strongly neurons are connected</li>
              <li>Which information is more important</li>
              <li>Think of them as volume knobs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Understanding the Code: Step by Step</h2>
        
        <div className="space-y-8">
          {/* Step 1: Constructor */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-medium mb-4">Step 1: Setting Up the Network</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`class NeuralNetwork {
  constructor(inputSize, hiddenSize, outputSize) {
    this.inputSize = inputSize;    // Number of input neurons
    this.hiddenSize = hiddenSize;  // Number of hidden neurons
    this.outputSize = outputSize;  // Number of output neurons
  }`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mb-2">
              This is like setting up a factory. We decide:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>How many inputs we'll accept (inputSize)</li>
              <li>How many "middle" workers we need (hiddenSize)</li>
              <li>How many final outputs we want (outputSize)</li>
            </ul>
          </div>

          {/* Step 2: Weights and Biases */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-medium mb-4">Step 2: Creating Connections (Weights)</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`// Initialize weights and biases
this.weightsIH = Array(hiddenSize).fill().map(() => 
  Array(inputSize).fill().map(() => Math.random() - 0.5)
);`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mb-2">
              This creates connections between neurons:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Each connection gets a random starting strength (between -0.5 and 0.5)</li>
              <li>weightsIH means "weights from Input to Hidden layer"</li>
              <li>Think of it as drawing lines between workers, each with a different strength</li>
            </ul>
          </div>

          {/* Step 3: Activation Function */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-medium mb-4">Step 3: The Brain's "Switch" (Activation Function)</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`// Sigmoid activation function
sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mb-2">
              The sigmoid function is like an on/off switch that:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Takes any number and turns it into a value between 0 and 1</li>
              <li>Helps the network make decisions</li>
              <li>Works like a "confidence score" - how sure is the neuron about its output?</li>
            </ul>
          </div>

          {/* Step 4: Forward Propagation */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-medium mb-4">Step 4: Processing Information (Forward Propagation)</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`// Forward propagation
feedForward(inputs) {
  // Calculate hidden layer outputs
  let hidden = this.weightsIH.map((weights, i) => 
    this.sigmoid(
      weights.reduce((sum, weight, j) => sum + weight * inputs[j], 0) 
      + this.biasH[i]
    )
  );`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mb-2">
              This is where the magic happens:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Takes input information (like numbers representing an image)</li>
              <li>Passes it through the connections we created</li>
              <li>Each neuron combines all its inputs and produces an output</li>
              <li>Think of it as an assembly line where each worker processes part of the information</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Try It Yourself!</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Start Small</h3>
          <p className="text-gray-700 mb-4">
            Begin with a simple example: Create a neural network that learns to solve the XOR problem:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`// Create a new neural network
const nn = new NeuralNetwork(2, 4, 1);

// XOR examples:
// 0,0 → 0
// 0,1 → 1
// 1,0 → 1
// 1,1 → 0`}</code>
          </pre>
          <p className="mt-4 text-gray-700">
            This is like teaching the network to understand a simple pattern - when inputs are different, output 1; when they're the same, output 0.
          </p>
        </div>
      </section>

      <section className="mt-8 p-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
        <p className="text-gray-700 mb-2">Now that you understand the basics:</p>
        <ul className="list-disc ml-5 mt-2 space-y-2">
          <li>Try changing the numbers in the constructor to make different sized networks</li>
          <li>Experiment with different input values</li>
          <li>Try to predict what the network will output with different inputs</li>
        </ul>
      </section>
    </main>
  );
}
