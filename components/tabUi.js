import React, { useEffect, useState, useRef } from 'react';
import { enums } from '../util';

const debugCss = false;

export const TabUi = ({ title, date, tab }) => {
  const [tickIndex, setTickIndex] = useState(0);
  const [tickAdvancer, setTickAdvancer] = useState(null);
  const [isShowingBeats, setIsShowingBeats] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setTickAdvancer(oldTickAdvancer => {
        clearInterval(oldTickAdvancer);
        return advanceTicks();
      });
    }, 100);
  }, []);

  const advanceTicks = () => {
    const integerDelay = Math.floor(totalDelayPerTickMs);
    const fractionalDelay = totalDelayPerTickMs - integerDelay;
    const roundUp = Math.random() < fractionalDelay;
    const extraDelay = roundUp ? 1 : 0;
    const totalIntegerDelay = integerDelay + extraDelay;

    return setInterval(() => {
      const currentTimeSeconds = audio && audio.current ? audio.current.currentTime : tab.audioOffsetSeconds;
      const currentTimeOffsetSeconds = currentTimeSeconds - tab.audioOffsetSeconds;
      const nextTick = Math.floor((1000 * currentTimeOffsetSeconds) / msPerTick);
      if (nextTick > totalTicks) {
        setTickIndex(0);
      } else {
        setTickIndex(nextTick);
      }
    }, totalIntegerDelay);
  };


  const bars = tab.asBars();
  const totalTicks = bars.length > 0 ? (bars.length * bars[0].length) : 0;
  const ticksPerMinute = tab.ticksPerBeat * tab.bpm;
  const msPerTick = 60000 / ticksPerMinute;
  const msPerSample  = Math.min(100, msPerTick / 4); // nyquist: sample rate must be at least 2x freq
  const totalDelayPerTickMs = msPerSample;

  return (
    <>
      <TabHeader
        title={title}
        date={date}
        isShowingBeats={isShowingBeats}
        toggleIsShowingBeats={() => setIsShowingBeats(oldValue => !oldValue)}
        audio={audio}
        audioFile={tab.audioFile}
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
              isShowingBeats={isShowingBeats}
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
  isShowingBeats,
  toggleIsShowingBeats,
  audio,
  audioFile,
}) => {
  const isShowingBeatsLabel = isShowingBeats ? 'Hide beats' : 'Show beats';
  return (
    <div className="tab-header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2>{title}</h2>
          <h3>{date}</h3>
        </div>

        <Button label={isShowingBeatsLabel} onClick={toggleIsShowingBeats} />
      </div>

      <div style={{ display: 'flex' }}>
        <ReactAudio
          audio={audio}
          audioFile={audioFile}
        />
      </div>

      <style jsx>{`
        .tab-header {
          position: sticky;
          top: 0;
          background: white;
          padding-top: 16px;
          padding-bottom: 16px;
          z-index: 4;
          box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
});

const Button = React.memo(({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
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
  );
});

const ReactAudio = React.memo(({ audio, audioFile }) => {
  useEffect(() => {
    audio.current.playbackRate = 1;
  }, []);

  return (
    <audio style={{ flex: 1 }} ref={audio} controls loop>
      <source src={audioFile} type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  );
});

const BarUi = React.memo(({ bar, firstTickIndex, activeTickIndex, isShowingBeats }) => {
  const maxTicksPerLine = 40;
  const maxBarsPerLine = Math.floor(maxTicksPerLine / bar.length);
  const percentPerBar = (100 / maxBarsPerLine).toFixed(2);

  return (
    <div>
      {bar.map((tick, relativeTickIndex) => {
        const currentTickIndex = firstTickIndex + relativeTickIndex;
        const isActive = currentTickIndex === activeTickIndex;
        const isOffBeat = currentTickIndex % 4 !== 0;
        return (
          <Tick
            key={relativeTickIndex}
            relativeTickIndex={relativeTickIndex}
            isActive={isActive}
            isOffBeat={isOffBeat}
            isShowingBeats={isShowingBeats}
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

          ${debugCss ? 'border: 1px solid blue;' : ''}
        }

        @media only screen and (max-width: 920px) {
          div {
            width: 100%;
            margin-bottom: 64px;
          }
        }
      `}</style>
    </div>
  );
});

const Tick = React.memo(({ tick, relativeTickIndex, isActive, isOffBeat, isShowingBeats }) => {
  const tickRef = useRef(null);

  useEffect(() => {
    if (relativeTickIndex === 0) {
      tickRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  const makeGuitarString = guitarString => {
    return (
      <GuitarString
        tick={tick}
        isActive={renderAsActive}
        activeColor={activeColor}
        guitarString={guitarString}
      />
    );
  };

  let renderAsActive = isActive;
  let activeColor = isOffBeat ? 'rgb(255, 255, 200)' : 'yellow';
  if (isShowingBeats && !isOffBeat) {
    activeColor = isActive ? activeColor : '#efefef';
    renderAsActive = true;
  }

  return (
    <div ref={tickRef}>
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
          background: ${(renderAsActive) ? activeColor : 'transparent'};

          ${debugCss ? 'border: 1px solid red;' : ''}
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

          ${debugCss ? 'border: 1px solid lightgreen;' : '' }
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
