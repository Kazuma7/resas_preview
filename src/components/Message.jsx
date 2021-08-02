const Message = () => {
  return (
    <div>
      <div className="mainMessageBox">
        <p>
          💡ここはRESAS-APIを用いて都道府県ごとの総人口を調べ、比較することができるwebサービスです。
        </p>
      </div>
      <div className="subMessageBox">
        <p className="subM">RESAS-APIについてはこちら</p>
        <a className="subMA1" href="https://opendata.resas-portal.go.jp/">
          https://opendata.resas-portal.go.jp/
        </a>
        <p className="subM">ソースコードはGitHubで公開中</p>
        <a className="subMA" href="https://github.com/Kazuma7/resas-app">
          https://github.com/Kazuma7/resas_preview
        </a>
      </div>
    </div>
  );
};

export { Message };
