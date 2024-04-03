import Section from './Section';
import CoreConcept from './CoreConcept';

export default function CoreConcepts(props) {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {props.CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  )
}
