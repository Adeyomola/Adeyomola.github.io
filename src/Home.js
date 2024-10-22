import "./Home.css";

function Home() {
  return (
    <>
      <main id="#" className="home">
        <div id="welcome">
          <p id="intro">Hi! I'm Adeyomola</p>
          <p id="hi">I'm an AWS-Certified Cloud/DevOps Specialist.</p>
          <certs id="certs">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.credly.com/badges/b0f68a76-d447-463e-a0dd-4823a629f6e9/embedded"
              >
                <img
                  width="105"
                  height="105"
                  alt="AWS Certified Solutions Architect Associate"
                  src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                ></img>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.credly.com/badges/3462c168-de5f-4290-bed4-8be00c28ed6f/embedded"
              >
                <img
                  width="105"
                  height="105"
                  alt="AWS Certified Cloud Practitioner"
                  src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                ></img>
              </a>
            </div>
          </certs>
          <p id="talk">
            My primary focus is on CI/CD and Infrastructure Engineering.
            <br></br>I work with Terraform, Docker, Kubernetes, Jenkins, Azure
            DevOps, Github Actions, Bash, Python, Prometheus, Grafana, Elastic
            Stack, Ansible, Loki, Promtail, Azure, and AWS.
            <br></br>I also have fullstack web development experience using
            HTML, CSS (Bootstrap), JavaScript (React), Python(Flask), SQL DBMS,
            and NoSQL DBMS.
          </p>
        </div>
        <div id="logos">
          <images>
            <img
              src={require("./images/aws.png")}
              style={{ "--i": "1" }}
              alt="AWS"
              title="AWS"
              id="aws"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/azure.png")}
              style={{ "--i": "2" }}
              alt="Azure"
              title="Azure"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/ansible.png")}
              style={{ "--i": "3" }}
              alt="ansible"
              title="ansible"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/terraform.png")}
              style={{ "--i": "4" }}
              alt="terraform"
              title="terraform"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/jenkins.png")}
              style={{ "--i": "5" }}
              alt="Jenkins"
              title="Jenkins"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/kubernetes.png")}
              style={{ "--i": "6" }}
              alt="Kubernetes"
              title="Kubernetes"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/prometheus.png")}
              style={{ "--i": "7" }}
              alt="Prometheus"
              title="Prometheus"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/bash.png")}
              style={{ "--i": "8" }}
              alt="Bash"
              title="Bash"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/devops.png")}
              style={{ "--i": "9" }}
              alt="DevOps"
              title="DevOps"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/elastic.png")}
              style={{ "--i": "10" }}
              alt="Elastic"
              title="Elastic Stack"
            ></img>
          </images>
          <images>
            <img
              className="htmlcss"
              src={require("./images/Html5.png")}
              style={{ "--i": "11" }}
              alt="HTML"
              title="HTML"
            ></img>
          </images>
          <images>
            <img
              className="htmlcss"
              src={require("./images/CSS3.png")}
              style={{ "--i": "12" }}
              alt="CSS"
              title="CSS"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/JS.png")}
              style={{ "--i": "13" }}
              alt="JavaScript"
              title="JavaScript"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/react.png")}
              style={{ "--i": "14" }}
              alt="React"
              title="React"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/python.png")}
              style={{ "--i": "15" }}
              alt="Python"
              title="Python"
            ></img>
          </images>
          <images>
            <img
              className="flaskgit"
              src={require("./images/flask.png")}
              style={{ "--i": "16" }}
              alt="Flask"
              title="Flask"
            ></img>
          </images>
          <images>
            <img
              className="flaskgit"
              src={require("./images/git.png")}
              style={{ "--i": "17" }}
              alt="Git"
              title="Git"
            ></img>
          </images>
          <images>
            <img
              src={require("./images/SQL.png")}
              style={{ "--i": "18" }}
              alt="SQL"
              title="SQL"
            ></img>
          </images>
        </div>
      </main>
    </>
  );
}
export default Home;
