import { TabUi } from '../components/tabUi';
import { tab as untitled01 } from '../tabs/untitled-01';

export default function Index() {
  return (
    <Container>
      <h1>tabs</h1>

      <TabUi 
        title={'untitled-01'}
        date={'2020-04-29'}
        audioFile={"/untitled-01.wav"}
        tab={untitled01}
      />

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
