import "./example-login.css"

export function ExampleLogin() {
  return (
    <div className="fb-login-container">
      <div className="fb-login-card">
        <h1 className="fb-login-title">ログイン</h1>
        <p className="fb-login-subtitle">
          アカウントにログインしてください
        </p>
        <form className="fb-login-form">
          <div className="fb-form-group">
            <label htmlFor="field-email">メールアドレス</label>
            <input
              id="field-email"
              type="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="fb-form-group">
            <label htmlFor="field-password">パスワード</label>
            <input
              id="field-password"
              type="password"
              placeholder="パスワードを入力"
              required
            />
          </div>
          <div className="fb-form-actions">
            <button type="submit" className="fb-login-button">
              ログイン
            </button>
          </div>
          <div className="fb-form-footer">
            <a href="#" className="fb-forgot-password">
              パスワードをお忘れですか？
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
