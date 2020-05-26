import React, { useEffect, useState } from 'react';
import { enums } from '../util';

const debug = false;

export const TabUi = ({ title, date, audioFile, tab }) => {
  const [tickIndex, setTickIndex] = useState(0);
  const [tickAdvancer, setTickAdvancer] = useState(null);
  const [audioStartTime, setAudioStartTime] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioVersion, setAudioVersion] = useState(Math.random());

  const bars = tab.asBars();
  const totalTicks = bars.length > 0 ? (bars.length * bars[0].length) : 0;
  const ticksPerMinute = 2 * tab.bpm;
  const msPerTick = 60000 / ticksPerMinute;
  const computeDelayPerTickInMs = -0.8;
  const totalDelayPerTickMs = msPerTick - computeDelayPerTickInMs;

  const advanceTicks = () => {
    const integerDelay = Math.floor(totalDelayPerTickMs);
    const fractionalDelay = totalDelayPerTickMs - integerDelay;
    const roundUp = Math.random() < fractionalDelay;
    const extraDelay = roundUp ? 1 : 0;
    const totalIntegerDelay = integerDelay + extraDelay;

    return setInterval(() => {
      setTickIndex(oldTickIndex => {
        if ((oldTickIndex + 1) % totalTicks === 0) {
          setAudioVersion(Math.random());
          return 0;
        }

        return oldTickIndex + 1;
      });
    }, totalIntegerDelay);
  };

  let interval = null;
  const play = () => {
    setAudioStartTime(2.45);
    setIsAudioPlaying(true);
    setAudioVersion(Math.random());

    setTimeout(() => {
      setTickIndex(0);
      setTickAdvancer(oldTickAdvancer => {
        clearInterval(oldTickAdvancer);
        return advanceTicks();
      });
    }, 100);
  };

  return (
    <>
      <TabHeader
        title={title}
        date={date}
        play={play}
        audioFile={audioFile}
        audioStartTime={audioStartTime}
        isAudioPlaying={isAudioPlaying}
        version={audioVersion}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '48px' }}>
        {bars.map((bar, barIndex) => {
          const ticksPerBar = bar.length;
          const firstTickIndex = ticksPerBar * barIndex;
          return (
            <BarUi
              key={barIndex}
              firstTickIndex={firstTickIndex}
              activeTickIndex={tickIndex}
              bar={bar}
            />
          );
        })}
      </div>
    </>
  )
};

const TabHeader = React.memo(({
  title,
  date,
  play,
  audioFile,
  audioStartTime,
  isAudioPlaying,
  version,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h2>{title}</h2>
        <h3>{date}</h3>
      </div>

      <button onClick={play}>
        Play
        <style jsx>{`
          cursor: pointer;
          font-size: 18px;
          background: white;
          height: 48px;
          outline: none;
          border: 1px solid #888;
          border-radius: 2px;
          padding: 8px 32px;
          transition: 0.2s;
          :hover {
            background: #eee;
          }
        `}</style>
      </button>

      <ReactAudio
        audioFile={audioFile}
        startTime={audioStartTime}
        isPlaying={isAudioPlaying}
        version={version}
      />
    </div>
  );
});

const ReactAudio = React.memo(({ audioFile, startTime, isPlaying, version }) => {
  const audio = React.createRef();

  useEffect(() => {
    audio.current.currentTime = startTime;

    if (isPlaying) {
      audio.current.play();
    }
  }, [startTime, isPlaying, version]);

  return (
    <audio style={{ flex: 2 }} ref={audio}>
      <source src={audioFile} type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  );
});

const BarUi = React.memo(({ bar, firstTickIndex, activeTickIndex }) => {
  const maxTicksPerLine = 24;
  const maxBarsPerLine = Math.floor(maxTicksPerLine / bar.length);
  const percentPerBar = (100 / maxBarsPerLine).toFixed(2);

  return (
    <div>
      {bar.map((tick, relativeTickIndex) => {
        const currentTickIndex = firstTickIndex + relativeTickIndex;
        const isActive = currentTickIndex === activeTickIndex;
        const isOffBeat = currentTickIndex % 2 === 1;
        return (
          <Tick
            key={relativeTickIndex}
            isActive={isActive}
            isOffBeat={isOffBeat}
            tick={tick}
          />
        );
      })}

      <style jsx>{`
        div {
          width: ${percentPerBar}%;
          display: flex;
          padding-right: 32px;
          margin-bottom: 32px;

          ${debug ? 'border: 1px solid blue;' : ''}
        }

        @media only screen and (max-width: 600px) {
          div {
            width: 100%;
            margin-bottom: 64px;
          }
        }
      `}</style>
    </div>
  );
});

const Tick = React.memo(({ tick, isActive, isOffBeat }) => {
  const activeColor = isOffBeat ? 'rgb(255, 255, 200)' : 'yellow';
  const makeGuitarString = guitarString => {
    return (
      <GuitarString
        tick={tick}
        isActive={isActive}
        activeColor={activeColor}
        guitarString={guitarString}
      />
    );
  };

  return (
    <div>
      {makeGuitarString(enums.guitarStrings.first)}
      {makeGuitarString(enums.guitarStrings.second)}
      {makeGuitarString(enums.guitarStrings.third)}
      {makeGuitarString(enums.guitarStrings.fourth)}
      {makeGuitarString(enums.guitarStrings.fifth)}
      {makeGuitarString(enums.guitarStrings.sixth)}

      <style jsx>{`
        div {
          flex: 1;
          height: 200px;
          background: ${isActive ? activeColor : 'transparent'};

          ${debug ? 'border: 1px solid red;' : ''}
        }

        div:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
});

const GuitarString = React.memo(({ tick, guitarString, isActive, activeColor }) => {
  const percentPerString = (100 / enums.numberOfStrings).toFixed(2);
  const note = tick.getNoteAt(guitarString);
  const label = note.toFretString();
  const accent = note.getAccent();
  const isAccent = [enums.accents.hammer, enums.accents.halfHammer].includes(accent);
  const isHalf = accent === enums.accents.halfHammer;

  return (
    <div className="guitar-string-container">
      <div className="guitar-string-line"></div>
      <NoteUi label={label} isActive={isActive} activeColor={activeColor} />
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
});

const NoteUi = React.memo(({ label, isActive, activeColor }) => {
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
          background: ${isActive ? activeColor : 'white'};
          padding: 2px;
          z-index: 2;
        }
      `}</style>
    </div>
  );
});

const Accent = React.memo(({ half }) => {
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
});
