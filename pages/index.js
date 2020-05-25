import { Tab, Chord } from '../util';

export default function Index() {
  const tab = Tab.fromBpm(100);
  tab.addChord(Chord.fromString('3_____'));
  const tab2 = Tab.fromJson(tab.toJson());
  console.log(JSON.stringify(tab2.toJson(), true, 2));

  return (
    <div>
      <h1>Anthony's Guitar Tabs</h1>
    </div>
  );
};
