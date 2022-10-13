function Cloud() {
  return (
    <>
      <body
        id="cloud"
        onPointerEnter={() => {
          window.location.hash = "cloud";
        }}
      >
        <main>
          <div id="link-container">
            <p id="frontendTitle">Cloud Projects</p>
            <section>
              <a
                href="https://github.com/Adeyomola/recycle_bin"
                target="_blank"
              >
                Recycle Bin for Linux Terminals
              </a>
              <a
                href="https://github.com/Adeyomola/RAM_Usage_Log_Script"
                target="_blank"
              >
                RAM Usage Log Script
              </a>
              {/* <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
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
