function About() {
  return (
    <main id="about">
      <div id="aboutDiv">
        <div id="details">
          <table>
            <thead>
              <tr>
                <td colSpan="2" className="cando" id="head">
                  Who Am I?
                </td>
              </tr>
              <tr>
                <td id="talk">
                  I'm a DevOps/Cloud Engineer with about 2 years of experience
                  with Linux and Cloud systems. My primary focus is on CI/CD and
                  Infrastructure Engineering.
                  <br></br>I work primarily with Terraform, Docker, Kubernetes,
                  Jenkins, Azure DevOps, Github Actions, Bash, Python,
                  Prometheus, Grafana, Elastic Stack, Ansible, Loki, Promtail,
                  Azure, and AWS.
                  {/* <br></br>
                  When I'm not doing Software Engineering, I'm a Pharmacist, a
                  Writer, and i++ other things. */}
                  {/* I get tired sometimes, and when I
                do, you'll find me with my face buried in something comical.
                &#128523; */}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </main>
  );
}

export default About;
