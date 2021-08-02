const Message = () => {
  return (
    <div>
      <div className="main_message-box">
        <p className="main_m">
          💡ここはRESAS-APIを用いて都道府県ごとの総人口を調べ、比較することができるwebサービスです。
        </p>
      </div>
      <div className="sub_message_box">
        <p className="sub_m">RESAS-APIについてはこちら</p>
        <a className="sub_m_a1" href="https://opendata.resas-portal.go.jp/">
          https://opendata.resas-portal.go.jp/
        </a>
        <p className="sub_m">ソースコードはGitHubで公開中</p>
        <a className="sub_m_a" href="https://github.com/Kazuma7/resas-app">
          https://github.com/Kazuma7/resas-app
        </a>
      </div>
    </div>
  );
};

export { Message };
