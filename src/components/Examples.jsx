import { useState } from 'react';

import Section from './Section';
import Tabs from './Tabs';
import TabButton from './TabButton';

export default function Examples(props) {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', or 'state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{props.EXAMPLES[selectedTopic].title}</h3>
        <p>{props.EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{props.EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        // ButtonsContainer="ul"
        // ButtonsContainer={Section} is valid
        buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  )
}
