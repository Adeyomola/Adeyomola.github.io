function Skills() {
  return (
    <main id="skills">
      <div id="aboutDiv">
        <table id="table">
          <thead>
            <tr>
              <td colSpan="2" className="cando" id="Skillsheader">
                Skills and Tools
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cando">DevOps and Sec Tools</td>
              <td className="cando">
                Ansible, Docker, Kubernetes, Terraform, Jenkins, AzureDevOps,
                Linux, Prometheus, Grafana, Loki, Promtail, ElasticSearch,
                Logstash, Kibana, SonarQube, Trivy.
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
              <td className="cando">Flask, React</td>
            </tr>
            <tr>
              <td className="cando">Hard Skills</td>
              <td className="cando">
                Automation, Containerization, Container Orchestration,
                Configuration Management, Infrastructure as Code (IAC), Linux
                System Administration, Network Administration, Technical
                Writing.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Skills;
