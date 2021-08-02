const fetchPrefectures = async (apiKey) => {
  //１ヶ月以上経過したらローカルストレージのデータを削除する
  if (localStorage.getItem('prefNameDate')) {
    const date = JSON.parse(localStorage.getItem('prefNameDate'));
    if (new Date(date).getMonth() !== new Date().getMonth()) {
      localStorage.removeItem('prefName');
    }
  }

  //ローカルストレージにデータがあればそれを使う
  if (localStorage.getItem('prefName')) {
    return JSON.parse(localStorage.getItem('prefName'));
  }

  //ローカルストレージにデータがなければRESAS-APIを通してデータを持ってくる
  const resPref = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: { 'X-API-KEY': apiKey },
    }
  );
  const json = await resPref.json();
  localStorage.setItem('prefNameDate', JSON.stringify(new Date()));
  localStorage.setItem('prefName', JSON.stringify(json.result));
  return json.result;
};

export { fetchPrefectures };
