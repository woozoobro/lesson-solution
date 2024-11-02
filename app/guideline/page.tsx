import React from "react";
import { Info, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

const AIVerificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Verify AI Answers</h1>
          <p className="text-xl mb-8">
            Understanding the importance of cross-checking and verifying
            AI-generated content
          </p>
          <Link
            href="/"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Verify AI-Generated Content?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI-generated responses can be helpful but may contain biases and
              lack transparency. Always verify the information.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Cross-Check Sources
              </h3>
              <p className="text-gray-600">
                Always look for credible sources to confirm the information
                provided by AI tools. This means checking academic papers,
                reputable news outlets, or expert opinions. AI can generate
                plausible-sounding information that is inaccurate or outdated.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <AlertCircle className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bias Awareness</h3>
              <p className="text-gray-600">
                AI models can reflect biases present in their training data,
                leading to skewed responses. Recognizing these biases is
                crucial. For example, if an AI response seems prejudiced or
                one-sided, it is essential to question its validity and consider
                alternative perspectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Info className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Seek Explainability
              </h3>
              <p className="text-gray-600">
                If an AI response lacks clarity, ask for more context or
                explanations to ensure understanding. This involves digging
                deeper into how the AI arrived at its conclusion, as
                transparency is key to trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Chat Examples Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Sample Chat Examples
          </h2>

          {/* Example 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <div className="mb-4">
              <strong>User:</strong> What is the capital of Australia?
            </div>
            <div className="mb-4">
              <strong>AI:</strong> The capital of Australia is Sydney.
            </div>
            <div className="text-red-600 font-semibold mb-4">
              <strong>Note:</strong> This answer is incorrect. The capital of
              Australia is actually Canberra. Always double-check facts provided
              by AI!
            </div>
            <div>
              <strong>Sources to Verify:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <a
                    href="https://www.australia.gov.au"
                    className="text-blue-600 underline"
                  >
                    Australia Government
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Canberra"
                    className="text-blue-600 underline"
                  >
                    Wikipedia: Canberra
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <div className="mb-4">
              <strong>User:</strong> Who won the Nobel Prize in Literature in
              2020?
            </div>
            <div className="mb-4">
              <strong>AI:</strong> The Nobel Prize in Literature in 2020 was
              awarded to J.K. Rowling.
            </div>
            <div className="text-red-600 font-semibold mb-4">
              <strong>Note:</strong> This answer is incorrect. The 2020 Nobel
              Prize in Literature was awarded to Louise Glück. Always verify
              such claims!
            </div>
            <div>
              <strong>Sources to Verify:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <a
                    href="https://www.nobelprize.org/prizes/literature/2020/gluck/facts/"
                    className="text-blue-600 underline"
                  >
                    Nobel Prize Official Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bbc.com/news/entertainment-arts-54466339"
                    className="text-blue-600 underline"
                  >
                    BBC News
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <div className="mb-4">
              <strong>User:</strong> What is the largest mammal in the world?
            </div>
            <div className="mb-4">
              <strong>AI:</strong> The largest mammal in the world is the
              African elephant.
            </div>
            <div className="text-red-600 font-semibold mb-4">
              <strong>Note:</strong> This answer is incorrect. The largest
              mammal is the blue whale, not the African elephant. It is crucial
              to verify biological facts!
            </div>
            <div>
              <strong>Sources to Verify:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <a
                    href="https://www.nationalgeographic.com/animals/mammals/facts/blue-whale"
                    className="text-blue-600 underline"
                  >
                    National Geographic
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Blue_whale"
                    className="text-blue-600 underline"
                  >
                    Wikipedia: Blue Whale
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center mt-6">
            Always verify AI-generated responses, especially when the
            information seems incorrect or misleading.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIVerificationPage;
