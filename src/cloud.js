function Cloud() {
  return (
    <>
      <body
        id="cloud"
        data-id="cloud"
        onPointerEnter={() => {
          window.location.hash = "cloud";
        }}
      >
        <main>
          <div id="link-container">
            <section>
              <a
                href="https://github.com/Adeyomola/recycle_bin"
                target="_blank"
                rel="noreferrer"
              >
                Recycle Bin for Linux Terminals
              </a>
              <a
                href="https://github.com/Adeyomola/RAM_Usage_Log_Script"
                target="_blank"
                rel="noreferrer"
              >
                RAM Usage Log Script
              </a>
              <a
                href="https://github.com/Adeyomola/LAMP-Deployment-Ansible"
                target="_blank"
                rel="noreferrer"
              >
                LAMP Deployment Ansible
              </a>
              <a
                href="https://github.com/Adeyomola/PostgresQL-SetUp-Script"
                target="_blank"
                rel="noreferrer"
              >
                PostgresQL SetUp Script
              </a>
              <a
                href="https://github.com/Adeyomola/ansible-provision-ec2-behind-alb"
                target="_blank"
                rel="noreferrer"
              >
                Ansible IAC - Private EC2 Instances Behind an ALB
              </a>
              <a
                href="https://github.com/Adeyomola/terraform-ansible-ec2-iac"
                target="_blank"
                rel="noreferrer"
              >
                Terraform - EC2 Instances Behind ALB
              </a>
              {/* <a href="" target="_blank"></a>
              <a href="" target="_blank"></a>
              <a href="" target="_blank"></a>
              <a href="" target="_blank"></a>
              <a href="" target="_blank"></a>
              <a href="" target="_blank"></a>
              <a href="" target="_blank"></a> */}
            </section>
          </div>
        </main>
      </body>
    </>
  );
}

export default Cloud;
