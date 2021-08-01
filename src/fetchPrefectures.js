const fetchPrefectures = async (
    apiKey
) => {
    const resPref = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': apiKey }
    })
    const json = await resPref.json()
    return json.result;
}

export{fetchPrefectures}