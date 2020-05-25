import { Tab, Chord } from '../util';

export default function Index() {
  const tab = Tab.fromBpm(100);
  tab.addChord(Chord.fromString('3_____'));
  const tab2 = Tab.fromJson(tab.toJson());
  console.log(JSON.stringify(tab2.toJson(), true, 2));

  return (
    <Container>
      <h1>Anthony's Guitar Tabs</h1>

      <TabUi>
        <BarUi ticksPerBar={4} />
        <BarUi ticksPerBar={4} />
        <BarUi ticksPerBar={4} />
        <BarUi ticksPerBar={4} />
        <BarUi ticksPerBar={4} />
      </TabUi>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
};

const Container = ({ children }) => {
  return (
    <div style={{ width: '880px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

const TabUi = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {children}
    </div>
  )
};

const BarUi = ({ ticksPerBar }) => {
  const maxTicksPerLine = 16;
  const maxBarsPerLine = Math.floor(maxTicksPerLine / ticksPerBar);
  const percentPerBar = (100 / maxBarsPerLine).toFixed(2);
  const ticks = [];
  for (let i = 0; i < ticksPerBar; i++) {
    ticks.push(<Tick />);
  }

  return (
    <div>
      {ticks}

      <style jsx>{`
        div {
          width: ${percentPerBar}%;
          display: flex;
          padding: 4px;
          border: 1px solid blue;
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

const Tick = () => {
  return (
    <div>
      C
      <style jsx>{`
        div {
          flex: 1;
          height: 200px;
          padding: 4px;
          margin-right: 4px;
          border: 1px solid red;
        }

        div:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};
