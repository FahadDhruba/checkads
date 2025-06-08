export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Machine Learning & Data Science: Understanding the Connection
        </h1>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Specialties & Core Focus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Data Science</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Focuses on extracting insights from data</li>
                <li>Encompasses the entire data lifecycle</li>
                <li>Includes data cleaning, analysis, and visualization</li>
                <li>Uses statistics and probability</li>
                <li>Emphasizes business problem-solving</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-green-600">Machine Learning</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Focuses on creating predictive models</li>
                <li>Emphasizes algorithm development</li>
                <li>Deals with pattern recognition</li>
                <li>Requires substantial computing resources</li>
                <li>Centers on model training and optimization</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">The Connection</h2>
          <p className="text-gray-600 mb-4">
            Machine Learning is often considered a subset of Data Science, but their relationship is more nuanced:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Both fields work with data to extract value</li>
              <li>They share common tools and programming languages</li>
              <li>Both require strong analytical thinking</li>
              <li>They often complement each other in real-world applications</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700">Aspect</th>
                  <th className="px-4 py-2 text-left text-blue-600">Data Science</th>
                  <th className="px-4 py-2 text-left text-green-600">Machine Learning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-medium">Primary Goal</td>
                  <td className="px-4 py-2">Extract insights from data</td>
                  <td className="px-4 py-2">Create predictive models</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Scope</td>
                  <td className="px-4 py-2">Broader, includes entire data lifecycle</td>
                  <td className="px-4 py-2">Focused on algorithms and predictions</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Tools Used</td>
                  <td className="px-4 py-2">SQL, Python, R, visualization tools</td>
                  <td className="px-4 py-2">TensorFlow, PyTorch, scikit-learn</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Output</td>
                  <td className="px-4 py-2">Insights, reports, dashboards</td>
                  <td className="px-4 py-2">Models, predictions, algorithms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
