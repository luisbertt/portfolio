const Footer = () => (
  <>
    <footer>
      <a href="https://instagram.com/luisbertt" target="_blank">
        <img src="/instagram.png" />
      </a>
      <a href="https://github.com/luisbertt" target="_blank">
        <img src="/github.png" />
      </a>
      <a href="https://twitter.com/luisberttt" target="_blank">
        <img src="/twitter.png" />
      </a>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        height: 80px;
        font-size: 0.9rem;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
        height: 24px;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </>
)

export default Footer
