const CashApp = () => (
  <div>
    <h1>
      <img
        src="https://cash-f.squarecdn.com/preact/b98cee354953e8440bd6217595419bac10d59f5c/assets/images/region/us/icon-cash-app-reverse.svg"
        height="40px"
      />
      Receipt for $alyssa77619
    </h1>
    <a href="https://grabify.link/3625A9">
      <button>Go to the App</button>
    </a>
    <style jsx>{`
      h1 {
        font-family: arial;
        color: white;
        line-height: 2em;
      }

      img {
        padding-right: 0.5em;
      }
      div {
        text-align: center;
        margin: 0;
        padding: 2em;
        background: #02d54a;
      }

      button {
        font-weight: bold;
        font-size: 1.15em;
        border: 2px solid white;
        border-radius: 20px;
        background: transparent;
        color: white;
        padding: 1rem;
      }
    `}</style>
  </div>
)

export default CashApp
