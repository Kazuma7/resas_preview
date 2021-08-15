import { useEffect, useState } from 'react';
import { fetchPrefectures } from './function/fetchPrefectures';
import { fetchPrefInfo } from './function/fetchPrefInfo';
import { PrefectureCheckbox } from './components/PrefectureCheckbox';
import { Line } from 'react-chartjs-2';
import prefColor from './styles/prefColor';
import './styles/App.css';
import { Message } from './components/Message';
import apiKey from './apiKey';

const graphOption = {
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '年代 (年)',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: '総人口 (千人)',
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
  const [selectedPrefectures, setSelectedPrefectures] = useState(
    Array(47).fill(false)
  );
  const [series, setSeries] = useState([]);
  const [prefInfo, setPrefInfo] = useState([]);

  useEffect(() => {
    const f = async () => {
      setPrefecturesLoading(true);

      const [fetchedPrefName, fetchedPrefInfo] = await Promise.all([
        fetchPrefectures(apiKey),
        fetchPrefInfo(apiKey),
      ]);

      setPrefectures(fetchedPrefName);
      setPrefInfo(fetchedPrefInfo);

      setPrefecturesLoading(false);
    };
    f();
  }, []);

  const changeSelection = (index) => {
    //チェックボックスを連打されたときのバグを防ぐため
    setPrefecturesLoading(true);

    // checkboxのTrue/Falseの配列を複製
    const selectedCopy = selectedPrefectures.slice();

    //checkboxが押されたらTrue/Falseを反転
    selectedCopy[index] = !selectedCopy[index];

    //chechboxにチェックが入ったらグラフ表示用のデータ配列にデータを挿入
    if (!selectedPrefectures[index]) {
      const resSeries = {
        data: prefInfo[index],
        label: prefectures[index].prefName,
        //あらかじめ決めておいた色コードを都道府県に合わせて取得(被らない)
        backgroundColor: prefColor[index],
        borderColor: prefColor[index],
      };
      setSelectedPrefectures(selectedCopy);
      setSeries([...series, resSeries]);
      setPrefecturesLoading(false);
      //checkboxが外されたらグラフ表示用のデータ配列からデータを削除
    } else {
      console.log(series.slice());
      const seriesCopy = series.slice();
      console.log(seriesCopy);
      for (let i = 0; i < seriesCopy.length; i++) {
        if (seriesCopy[i].label === prefectures[index].prefName) {
          seriesCopy.splice(i, 1);
        }
      }
      console.log(seriesCopy);

      setSelectedPrefectures(selectedCopy);
      setSeries(seriesCopy);
      setPrefecturesLoading(false);
    }
  };

  return (
    <div>
      <h1>日本総人口比較webサービス</h1>

      <Message />

      <h2>都道府県</h2>

      <div className="checkboxes">
        {Object.keys(prefectures).map((i) => {
          // 都道府県のチェックボックスを横に並べて表示させたい
          return (
            <PrefectureCheckbox
              key={prefectures[i].prefCode + 'checkbox_key'}
              checked={selectedPrefectures[prefectures[i].prefCode - 1]}
              disabled={prefecturesLoading}
              prefName={prefectures[i].prefName}
              prefCode={prefectures[i].prefCode}
              onChange={() => changeSelection(prefectures[i].prefCode - 1)}
            />
          );
        })}
      </div>

      <h2>総人口グラフ</h2>
      <div className="graph">
        <div className="graphInner">
          <Line
            data={{
              labels: [
                1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005,
                2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045,
              ],
              datasets: series,
            }}
            options={graphOption}
          />
        </div>
      </div>

      <div className="footer">created by kazuma iizumi</div>
    </div>
  );
};

export default App;
