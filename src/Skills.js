import "./Skills.css";
function Skills() {
  return (
    <main id="skills">
      <table id="table">
        <p className="cando" id="Skillsheader">
          Skills and Tools
        </p>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td className="cando">DevOps and Sec Tools</td>
            <td className="cando">
              Ansible, Docker, Kubernetes, Terraform, Jenkins, Github Actions,
              AzureDevOps, Linux, Prometheus, Grafana, Loki, Promtail,
              ElasticSearch, Logstash, Kibana, SonarQube, Trivy.
            </td>
          </tr>
          <tr>
            <td className="cando">Cloud Computing</td>
            <td className="cando">AWS, Azure</td>
          </tr>
          <tr>
            <td className="cando">Programming Languages</td>
            <td className="cando">Bash, JavaScript, Python.</td>
          </tr>
          <tr>
            <td className="cando">Frameworks and Libraries</td>
            <td className="cando">Flask, React, Bootstrap</td>
          </tr>
          <tr>
            <td className="cando">Hard Skills</td>
            <td className="cando">
              Automation, Containerization, Container Orchestration,
              Configuration Management, Infrastructure as Code (IAC), Linux
              System Administration, Network Administration, Technical Writing.
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Skills;
