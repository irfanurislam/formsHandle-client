import { useEffect, useState } from "react";

function App() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch("https://forms-handle-server.vercel.app/forms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForms(data);
      })
      .catch((error) => console.error("Error fetching forms:", error));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Submitted Forms</h1>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          {forms.length === 0 ? (
            <p className="text-center text-gray-600">No forms submitted yet.</p>
          ) : (
            <ul className="space-y-4">
              {forms.map((form, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-md shadow">
                  <h2 className="text-xl font-semibold">
                    Form Name: {form.formName}{" "}
                    {/* Changed to match server-side */}
                  </h2>
                  <p className="text-gray-700">
                    Active: {form.formActive ? "Yes" : "No"}{" "}
                    {/* Changed to match server-side */}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Submitted at: {new Date(form?.createdAt).toLocaleString()}{" "}
                    {/* Changed to match server-side */}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
