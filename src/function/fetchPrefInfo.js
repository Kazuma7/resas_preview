const fetchPrefInfo = async (apiKey) => {

    //１ヶ月以上経過したらローカルストレージのデータを削除する
    if (localStorage.getItem("prefInfoDate")) {
        const date = JSON.parse(localStorage.getItem("prefInfoDate"))
        if((new Date(date)).getMonth() !== (new Date()).getMonth()){
            localStorage.removeItem("prefInfo");  
        }
    }

    //ローカルストレージにデータがあればそれを使う
    if (localStorage.getItem("prefInfo")) {
        return JSON.parse(localStorage.getItem("prefInfo"))
    }

    //fetchPrefInfoByPrefCode関数を用いてデータを取得する
    const apis = Array(47).map(prefCode => {
        return fetchPrefInfoByPrefCode(apiKey, prefCode+1)
    })
    const responses = await Promise.all(apis)
    
    //各都道府県の総人口のデータをまとめて取得する
    const prefInfo = [];
    for (let prefCode = 0; prefCode < 47; prefCode++) {
        const res = responses[prefCode];
        const tmp = Object.keys(res.result.data[0].data).map(i => {
            return res.result.data[0].data[i].value / 1000;
        });
        prefInfo.push(tmp)
    }
    localStorage.setItem("prefInfoDate", JSON.stringify(new Date()))
    localStorage.setItem("prefInfo", JSON.stringify(prefInfo));

    return prefInfo;
}

//RESAS-APIを通してデータを持ってくる
const fetchPrefInfoByPrefCode = async (apiKey, prefCode) => {
    const resInfo = await fetch( `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,{headers: { 'X-API-KEY': apiKey }})
    const res = await resInfo.json();
    return res
}

export{fetchPrefInfo}