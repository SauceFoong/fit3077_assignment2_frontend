import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";

export default function onSiteTesting() {
  const [auth, setAuth] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [testToTake, setTestToTake] = useState([]);

  const css = `
    #ost-btn {
       margin: 20px;
       font-size: 10px;
       float: right;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 100%;
      font-size: 10px;
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    .container {
      padding: 2px 16px;
      margin: 10px;
    }

    .result {
        color: red;
        margin: 50% 50%;
    }
`;

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
      const item = "event.target.question" + (i + 1);
      answers.push(parseInt(eval(item).value));
    }

    const data = {
      answer: answers,
    };

    await fetch("http://localhost:8080/api/onsite-testing/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((data) => {
        setTestToTake(data.testAppropriate);
      });
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");

        if (token && token !== undefined) {
          setAuth(true);
        }
        if (questions.length === 0) {
          await fetch("http://localhost:8080/api/onsite-testing", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            res.json().then((data) => {
              setQuestions(data.form.questions);
            });
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <Layout auth={auth}>
      <style>{css}</style>
      {/* <span>{message}</span> */}
      <div className="row">
        <h4>
          The test you should take is: <br />
          <span className="result">{testToTake}</span>
        </h4>
        <form onSubmit={handleSubmit}>
          {questions &&
            questions.map((question, index) => {
              return (
                <div key={index} className="card">
                  <div className="container">
                    <p>
                      {index + 1}. {question}
                    </p>

                    <input
                      type="radio"
                      id={`question${index + 1}`}
                      name={`question${index + 1}`}
                      value="1"
                    />
                    <label>Yes</label>
                    <br />
                    <input
                      type="radio"
                      id={`question${index + 1}`}
                      name={`question${index + 1}`}
                      value="0"
                    />
                    <label>No</label>
                    <br />
                  </div>
                </div>
              );
            })}

          <button
            className="w-10 btn-lg btn-primary"
            type="submit"
            id="ost-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
