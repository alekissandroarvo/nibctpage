export default function MidiasSociais() {
  return (
    <div>
      <center>
        <>
          <a href="https://pt-br.facebook.com/nibcuritiba/">
            <img
              width="50px"
              height="50px"
              src="data:image/png;base64,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"
              alt="FacebookLogo"
            />
          </a>
        </>
        <>
          <a href="https://www.instagram.com/nibcuritiba/">
            <img
              width="50px"
              height="50px"
              src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png"
              alt=""
            />
          </a>
        </>
      </center>
    </div>
  );
}
