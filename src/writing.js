import "./Cloud.css";
function Writing() {
  return (
    <>
      <main id="writing">
        <section>
          <p id="title">Technical Writing</p>
          <a
            href="https://adeyomoladev.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./images/14.png")} alt="placeholder"></img>
            <p>Medium</p>
          </a>
          <a
            href="https://www.baeldung.com/linux/author/adeyomolakazeem"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./images/15.png")} alt="placeholder"></img>
            <p>Baeldung</p>
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
      </main>
    </>
  );
}

export default Writing;
