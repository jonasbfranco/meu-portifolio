import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import ExperienciaItem from './ExperienciaItem';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2022"
          title="Dev-Frontend"
          description="Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev-Frontend"
          description="Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev-Frontend"
          description="Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev-Frontend"
          description="Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}
