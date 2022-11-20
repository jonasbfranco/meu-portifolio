import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { ProjetoItem } from './ProjetoItem';


export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos"/>

      <section>
        <ProjetoItem />
        <ProjetoItem />
        <ProjetoItem />
        <ProjetoItem />
      </section>
    </Container>
  );
}
