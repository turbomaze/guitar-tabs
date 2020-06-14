import { TabUi } from '../components/tabUi';
import { tab as untitled01 } from '../tabs/untitled-01';
import { tab as untitled02 } from '../tabs/untitled-02';

export default function Index() {
  return (
    <Container>
      <h1>tabs</h1>

      <TabUi 
        title={'untitled-02'}
        date={'2020-06-13'}
        tab={untitled02}
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
    <div style={{ width: '100%', maxWidth: '1800px', margin: '0 auto' }}>
      {children}
    </div>
  );
};
