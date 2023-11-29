function Skills() {
  return (
    <body id="skills">
      <div id="aboutDiv">
        <div id="details">
          <table id="table">
            <thead>
              <tr>
                <td colSpan="2" className="cando" id="head">
                  What Can I Do?
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cando">Tools/IAAS</td>
                <td className="cando">
                  Ansible, Docker, Kubernetes, Terraform, Jenkins, AzureDevOps,
                  Linux, AWS, Azure, Prometheus, Grafana, Loki, Promtail,
                  ElasticSearch, Logstash, Kibana, SonarQube, Trivy.
                </td>
              </tr>
              <tr>
                <td className="cando">Languages</td>
                <td className="cando">Bash, JavaScript, Python.</td>
              </tr>
              <tr>
                <td className="cando">Frameworks and Libraries</td>
                <td className="cando">Flask, React</td>
              </tr>
              <tr>
                <td className="cando">Skills</td>
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
      </div>
    </body>
  );
}

export default Skills;
