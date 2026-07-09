import { Deck, PrintView } from './components';

const App = () => {
  return (
    <>
      {/* 화면에서는 인터랙티브 데크, 인쇄(PDF 저장) 시에는 PrintView가 표시된다 */}
      <div className='screen-root'>
        <Deck />
      </div>
      <PrintView />
    </>
  );
};

export default App;
