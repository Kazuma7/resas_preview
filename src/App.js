import { useEffect, useState } from "react";
import { fetchPrefectures } from "./fetchPrefectures";
import { fetchPrefInfo } from "./fetchPrefInfo";
import { PrefectureCheckbox } from './PrefectureCheckbox';
import { Line } from 'react-chartjs-2';
import prefColor from './prefColor';
import './App.css';
import { Message } from './Message';
import apiKey from './apiKey';

const graphOption = {
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '年代 (年)'
      },
      },
    y: {
      display: true,
      title: {
        display: true,
        text: '総人口 (千人)'
      },
      suggestedMin: 0,
      suggestedMax: 15000000 / 1000,
    },
  },
  //アスペクト比率をデフォルトから変更するため
  responsive: true,
  maintainAspectRatio: false,
};

const App = () => {

  const [prefectures, setPrefectures] = useState({});
  const [prefecturesLoading, setPrefecturesLoading] = useState(false);
  const [selectedPrefectures, setSelectedPrefectures] = useState(Array(47).fill(false));
  const [series, setSeries] = useState([]);
  const [prefInfo, setPrefInfo] = useState([]);

  useEffect(() => {
        const f = async () => {
          setPrefecturesLoading(true)

          const [fetchedPrefName, fetchedPrefInfo] = await Promise.all([
            fetchPrefectures(apiKey),
            fetchPrefInfo(apiKey),
          ]);

          setPrefectures(fetchedPrefName)
          setPrefInfo(fetchedPrefInfo)

          setPrefecturesLoading(false)
        }
        f()
  }, [])

  const changeSelection = (index) => {
    //チェックボックスを連打されたときのバグを防ぐため
    setPrefecturesLoading(true)

    // checkboxのTrue/Falseの配列を複製
    const selected_copy = selectedPrefectures.slice();

    //checkboxが押されたらTrue/Falseを反転
    selected_copy[index] = !selected_copy[index];

    //chechboxにチェックが入ったらグラフ表示用のデータ配列にデータを挿入
    if (!selectedPrefectures[index]) {
      const res_series = {
        data: prefInfo[index],
        label: prefectures[index].prefName,
        //あらかじめ決めておいた色コードを都道府県に合わせて取得(被らない)
        backgroundColor: prefColor[index],
        borderColor: prefColor[index],
      }
      setSelectedPrefectures(selected_copy)
      setSeries([...series, res_series])
      setPrefecturesLoading(false)
      //checkboxが外されたらグラフ表示用のデータ配列からデータを削除
    } else {
      const series_copy = series.slice();
      for (let i = 0; i < series_copy.length; i++) {
        if (series_copy[i].label === prefectures[index].prefName) {
          series_copy.splice(i, 1);
        }
      }

      setSelectedPrefectures(selected_copy)
      setSeries(series_copy)
      setPrefecturesLoading(false)
    }
  }


  return (
    <div>
      <h1>日本総人口比較webサービス</h1>

      <Message />

      <h2>都道府県</h2>

      <div className="checkboxes">
        {Object.keys(prefectures).map(i => {
          // 都道府県のチェックボックスを横に並べて表示させたい
          return (
            <PrefectureCheckbox
              checked={selectedPrefectures[prefectures[i].prefCode - 1]}
              disabled={prefecturesLoading}
              prefName={prefectures[i].prefName}
              prefCode={prefectures[i].prefCode}
              onChange={() => changeSelection(prefectures[i].prefCode - 1)}
            />
          )
        })}
      </div>

      <h2>総人口グラフ</h2>
      <div className="graph">
        <div className="graph-inner">
          <Line
            data={{
              labels: [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045],
              datasets: series,
            }}
            options={graphOption}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
