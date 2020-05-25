import { enums } from '../util';
import { tab as untitled01 } from '../tabs/untitled-01';

const debug = false;

export default function Index() {
  const bars = untitled01.asBars();

  return (
    <Container>
      <h1>tabs</h1>

      <TabUi>
        {bars.map((bar, index) => {
          return <BarUi key={index} bar={bar} />
        })}
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

const BarUi = ({ bar }) => {
  const maxTicksPerLine = 16;
  const maxBarsPerLine = Math.floor(maxTicksPerLine / bar.length);
  const percentPerBar = (100 / maxBarsPerLine).toFixed(2);

  return (
    <div>
      {bar.map((tick, index) => <Tick key={index} tick={tick} />)}

      <style jsx>{`
        div {
          width: ${percentPerBar}%;
          display: flex;
          padding-right: 32px;
          margin-bottom: 32px;

          ${debug ? 'border: 1px solid blue;' : ''}
        }
      `}</style>
    </div>
  );
};

const Tick = ({ tick }) => {
  return (
    <div>
      <GuitarString note={tick.getNoteAt(enums.guitarStrings.first)} />
      <GuitarString note={tick.getNoteAt(enums.guitarStrings.second)} />
      <GuitarString note={tick.getNoteAt(enums.guitarStrings.third)} />
      <GuitarString note={tick.getNoteAt(enums.guitarStrings.fourth)} />
      <GuitarString note={tick.getNoteAt(enums.guitarStrings.fifth)} />
      <GuitarString note={tick.getNoteAt(enums.guitarStrings.sixth)} />

      <style jsx>{`
        div {
          flex: 1;
          height: 200px;

          ${debug ? 'border: 1px solid red;' : ''}
        }

        div:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};

const GuitarString = ({ note }) => {
  const percentPerString = (100 / enums.numberOfStrings).toFixed(2);
  return (
    <div className="guitar-string-container">
      <div className="guitar-string-line"></div>
      <NoteUi label={note.toFretString()} />

      <style jsx>{`
        .guitar-string-container {
          height: ${percentPerString}%;
          position: relative;

          ${debug ? 'border: 1px solid lightgreen;' : '' }
        }

        .guitar-string-line {
          border-bottom: 1px solid black;
          height: 50%;
          transform: translateY(1px);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

const NoteUi = ({ label }) => {
  if (label === '') {
    return null;
  }

  return (
    <div>
      {label}
      <style jsx>{`
        div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 2px;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};
