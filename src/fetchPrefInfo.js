const fetchPrefInfo = async (
    apiKey
) => {
    const prefInfo = [];
    

    for (let i = 1; i < 48; i++) {
        const resInfo = await fetch( `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${i}`,
                {
                    headers: { 'X-API-KEY': apiKey }
            })
        const res = await resInfo.json();
        let tmp = [];
        Object.keys(res.result.data[0].data).forEach(i => {
            tmp.push(res.result.data[0].data[i].value / 1000);
        });
        prefInfo.push(tmp)
    }

    console.log(prefInfo)

return prefInfo;
}

export{fetchPrefInfo}