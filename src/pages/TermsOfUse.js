import React from 'react';
import { Link } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import LazyLoad from 'react-lazyload';

const TermsOfUse = () => {

    return (
        <>
            <SEO title="Termos de Uso" />
            <ColorSwitcher />
            <main className="main-wrapper">
            <LazyLoad height={200} offset={[-100, 0]} once ><HeaderOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><BreadCrumbOne title="Termos de Uso" page="Termos de Uso"/></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once >
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <div className="section-title">
                                    <h5 className="title">Este termos de uso foi publicada em 21 de Junho de 2022.</h5>
                                </div>
                                <p className="mb--20">Seja bem-vindo ao nosso site. Leia com atenção todos os termos abaixo.</p>

                                <p className="mb--20">Este documento, e todo o conteúdo do site é oferecido por DS3I Desenvolvimento de Aplicativos e Sites, neste termo representado apenas por “EMPRESA”, que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como “VISITANTE”, reguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no endereço <Link to={process.env.PUBLIC_URL+'/'}>https://ds3i.com.br/</Link>.</p>

                                <p>A permanência no website implica-se automaticamente na leitura e aceitação tácita do presente termos de uso a seguir. Este termo foi atualizado pela última vez em 21 de Junho de 2022.</p>
                                <h4>1. DA FUNÇÃO DO SITE</h4>
                                <p className="mb--20">Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A EMPRESA busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços.</p>

                                <p className="mb--20">Nesta plataforma, poderá ser realizado tanto a divulgação de material original de alta qualidade, assim como a divulgação de produtos de e-commerce.</p>

                                <p className="mb--20">Todo o conteúdo presente neste site foi desenvolvido buscando fontes e materiais de confiabilidade, assim como são baseados em estudos sérios e respeitados, através de pesquisa de alta nível.</p>

                                <p className="mb--20">Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado.</p>

                                <p>É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.</p>
                                <h4>2. DO ACEITE DOS TERMOS</h4>
                                <p className="mb--20">Este documento, chamado “Termos de Uso”, aplicáveis a todos os visitantes do site, foi desenvolvido pelo Equipe de desenvolvimento de site e aplicativos, modificado com permissão para este site.</p>
                                
                                <p className="mb--20">Este termo especifica e exige que todo usuário ao acessar o site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EMPRESA e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo VISITANTE a permanecer navegando no site da EMPRESA.</p>

                                <p className="mb--20">Ao continuar acessando o site, o VISITANTE expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o VISITANTE discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.</p>

                                <p>Este termo pode e irá ser atualizado periodicamente pela EMPRESA, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação. É importante que o VISITANTE confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.</p>
                                <h4>3. DO GLOSSÁRIO</h4>
                                <p>Este termo pode conter algumas palavras específicas que podem não se de conhecimento geral. Entre elas:</p>
                                <ul>
                                    <li><strong>VISITANTE:</strong> Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.
                                NAVEGAÇÃO: O ato de visitar páginas e conteúdo do website ou plataforma da empresa</li>
                                    <li><strong>COOKIES:</strong> Pequenos arquivos de textos gerados automaticamente pelo site e transmitido para o navegador do visitante, que servem para melhorar a usabilidade do visitante.</li>
                                    <li><strong>LOGIN:</strong> Dados de acesso do visitante ao realizar o cadastro junto a EMPRESA, dividido entre usuário e senha, que dá acesso a funções restritas do site.</li>
                                    <li><strong>HIPERLINKS:</strong> São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.</li>
                                    <li><strong>OFFLINE:</strong> Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.</li>
                                </ul>
                                <p>Em caso de dúvidas sobre qualquer palavra utilizada neste termo, o VISITANTE deverá entrar em contato com a EMPRESA através dos canais de comunicação encontradas no site.</p>
                                <h4>4. DO ACESSO AO SITE</h4>
                                <p className="mb--20">O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.</p>

                                <p className="mb--20">A EMPRESA não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.</p>

                                <p className="mb--20">Em caso de manutenção que exigirem um tempo maior, a EMPRESA irá informar previamente aos clientes da necessidade e do tempo previsto em que o site ou plataforma ficará offline.</p>

                                <p className="mb--20">O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena. Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.</p>

                                <p className="mb--20">Caso seja necessário realizar um cadastro junto a plataforma, onde o VISITANTE deverá preencher um formulário com seus dados e informações, para ter acesso a alguma parte restrita, ou realizar alguma compra.</p>

                                <p>Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o VISITANTE concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da EMPRESA.</p>
                                <h4>5. DA LICENÇA DE USO E CÓPIA</h4>
                                <p className="mb--20">O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.</p>

                                <p className="mb--20">Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na <a title='Lei 9.610/18' target={'_blank'} href="https://www.planalto.gov.br/ccivil_03/leis/l9610.htm">Lei nº 9.610/18</a>), assim como no Código Civil brasileiro (regulamentada na <a title='10.406/02' target={'_blank'} href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm">Lei nº 10.406/02</a>), ou quaisquer outras legislações aplicáveis.</p>

                                <p className="mb--20">Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão ou revenda, deve seguir a lei brasileira, tendo a EMPRESA todos os seus direitos reservados, e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma.</p>

                                <p>A EMPRESA poderá em casos concretos permitir pontualmente exceções a este direito, que serão claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. Este direito é revogável e limitado as especificações de cada caso.</p>
                                <h4>6. DAS OBRIGAÇÕES</h4>
                                <p>O VISITANTE ao utilizar o website da EMPRESA, concorda integralmente em:</p>
                                <ul>
                                    <li>De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, hacker, destruir ou prejudicar a estrutura do site, plataforma da EMPRESA ou de seus parceiros comerciais. Incluindo-se, mas não se limitando, ao envio de vírus de computador, de ataques de DDOS, de acesso indevido por falhas da mesma ou quaisquer outras forma e meio.</li>
                                    <li>De não realizar divulgação indevida nos comentários do site de conteúdo de SPAM, empresas concorrentes, vírus, conteúdo que não possua direitos autorais ou quaisquer outros que não seja pertinente a discussão daquele texto, vídeo ou imagem.</li>
                                    <li>Da proibição em reproduzir qualquer conteúdo do site ou plataforma sem autorização expressa, podendo responder civil e criminalmente pelo mesmo.</li>
                                    <li>Com a Política de Privacidade do site, assim como tratamos os dados referentes ao cadastro e visita no site, podendo a qualquer momento e forma, requerer a exclusão dos mesmos, através do formulário de contato.</li>
                                </ul>
                                <h4>7. DA MONETIZAÇÃO E PUBLICIDADE</h4>
                                <p className="mb--20">A EMPRESA pode alugar ou vender espaços publicitários na plataforma, ou no site, diretamente aos anunciantes, ou através de empresas especializadas com o Adsense (<a title='Lei 9.610/18' target={'_blank'} href="https://www.google.com">Google</a>), Taboola ou outras plataformas especializadas.</p>

                                <p className="mb--20">Essas publicidades não significam nenhuma forma de endosso ou responsabilidade pelos mesmos, ficando o VISITANTE responsável pelas compras, visitas, acessos ou quaisquer ações referentes as estas empresas.</p>

                                <p className="mb--20">Todas as propagandas no site ou plataforma serão claramente destacadas como publicidade, como forma de disclaimer da EMPRESA e de conhecimento do VISITANTE.</p>

                                <p className="mb--20">Em casos de compra de produtos ou serviços, será possível a devolução em até 07 (sete) dias, conforme o Código de Defesa do Consumidor.</p>

                                <p>Estes anúncios podem ser selecionados pela empresa de publicidade automaticamente, conforme as visitas recentes do VISITANTE, assim como baseado no seu histórico de busca, conforme as políticas de acesso da plataforma.</p>
                                <h4>8. DOS TERMOS GERAIS</h4>
                                <p className="mb--20">O Site irá apresentar hiperlinks durante toda a sua navegação, que podem levar diretamente para outra página da EMPRESA ou para sites externos.</p>

                                <p className="mb--20">Apesar da EMPRESA apenas criar links para sites externos de extrema confiança, caso o usuário acesse um site externo, a EMPRESA não tem nenhuma responsabilidade pelo meio, sendo uma mera indicação de complementação de conteúdo, ficando o mesmo responsável pelo acesso, assim como sobre quaisquer ações que venham a realizar neste site.</p>

                                <p className="mb--20">Em caso que ocorra eventuais conflitos judiciais entre o VISITANTE e a EMPRESA, o foro elegido para a devida ação será o da comarca da Empresa, mesmo que haja outro mais privilegiado.</p>

                                <p>Este Termo de uso é valido a partir de 21 de Junho de 2022.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><CtaLayoutOne /></LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><FooterOne parentClass="" /></LazyLoad>
            </main>
        </>
    )
}

export default TermsOfUse;