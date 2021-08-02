const fetchPrefectures = async (
    apiKey
) => {
    if (localStorage.getItem("prefNameDate")) {
        const date = JSON.parse(localStorage.getItem("prefNameDate"))
        if((new Date(date)).getMonth() !== (new Date()).getMonth()){
            localStorage.removeItem("prefName");  
        }
    }

    if (localStorage.getItem("prefName")) {
        console.log(Object.keys(localStorage.getItem("prefName")).length)
        return JSON.parse(localStorage.getItem("prefName"))

    }

    const resPref = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': apiKey }
    })
    const json = await resPref.json()
    localStorage.setItem("prefNameDate", JSON.stringify(new Date()))
    localStorage.setItem("prefName", JSON.stringify(json.result));
    return json.result;

}

export{fetchPrefectures}