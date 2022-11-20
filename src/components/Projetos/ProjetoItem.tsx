import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';


export function ProjetoItem() {
  return (
    <ProjetoContainer imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/projeto">
          <a>Ver mais  <AiOutlineRightCircle /> </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
