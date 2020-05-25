import { enums } from '../util';
import { tab as untitled01 } from '../tabs/untitled-01';

const debug = false;

export default function Index() {
  const bars = untitled01.asBars();

  return (
    <Container>
      <h1>tabs</h1>
      <h2>untitled-01</h2>
      <h3>2020-04-29</h3>

      <TabUi>
        {bars.map((bar, index) => {
          return <BarUi key={index} bar={bar} />
        })}
      </TabUi>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: monospace;
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
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '48px' }}>
      {children}
    </div>
  )
};

const BarUi = ({ bar }) => {
  const maxTicksPerLine = 24;
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
      <GuitarString tick={tick} guitarString={enums.guitarStrings.first} />
      <GuitarString tick={tick} guitarString={enums.guitarStrings.second} />
      <GuitarString tick={tick} guitarString={enums.guitarStrings.third} />
      <GuitarString tick={tick} guitarString={enums.guitarStrings.fourth} />
      <GuitarString tick={tick} guitarString={enums.guitarStrings.fifth} />
      <GuitarString tick={tick} guitarString={enums.guitarStrings.sixth} />

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

const GuitarString = ({ tick, guitarString }) => {
  const percentPerString = (100 / enums.numberOfStrings).toFixed(2);
  const note = tick.getNoteAt(guitarString);
  const label = note.toFretString();
  const accent = note.getAccent();
  const isAccent = [enums.accents.hammer, enums.accents.halfHammer].includes(accent);
  const isHalf = accent ===enums.accents.halfHammer;

  return (
    <div className="guitar-string-container">
      <div className="guitar-string-line"></div>
      <NoteUi label={label} />
      { isAccent ? <Accent half={isHalf} /> : null }

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
          font-size: 24px;
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

const Accent = ({ half }) => {
  return (
    <div>
      <style jsx>{`
        div {
          position: absolute;
          border-top: 1px solid black;
          border-radius: 50%;
          background: transparent;
          padding: 2px;

          top: 10%;
          left: -100%;
          width: ${half ? '100%' : '200%'};
          transform: translate(${half ? '50%' : '-25%'}, -50%);
          height: 66%;

          z-index: 3;
        }
      `}</style>
    </div>
  );
}
