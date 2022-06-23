import React from 'react';
import { Link } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import LazyLoad from 'react-lazyload';

const PrivacyPolicy = () => {

    return (
        <>
            <SEO title="Política de Privacidade" />
            <ColorSwitcher />
            <main className="main-wrapper">
            <LazyLoad height={200} offset={[-100, 0]} once ><HeaderOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><BreadCrumbOne title="Política de Privacidade" page="Política de Privacidade"/></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once >
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <div className="section-title">
                                    <h5 className="title">Esta política de privacidade foi publicada em 20 de Junho de 2022.</h5>
                                </div>
                                <p className="mb--20">A sua privacidade é importante para nós. É nossa política respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nosso site, e outros sites que possuímos e operamos.</p>
                                <p className="mb--20">Por esse motivo, respeitamos todas as normas e regras estabelecidas pelas legislações que buscam proteger os dados pessoais, principalmente a <a title='Lei 13.709/18' target={'_blank'} href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei 13.709/18</a>, bem como, utilizamos as técnicas de segurança mais adequadas para todas as etapas de tratamentos que realizamos com as informações coletadas em nosso site.</p>

                                <p className="mb--20">Em busca de sermos transparentes e em respeito a todos os visitantes/usuários do nosso site, apresentamos este documento, denominado Politica de Privacidade e Segurança do <Link to={process.env.PUBLIC_URL+'/'}>https://ds3i.com.br/</Link></p>

                                <p className="mb--20">Este documento é vinculado e integra as <Link to={process.env.PUBLIC_URL+ "/terms-use/"}>Condições e Termos de Uso</Link> deste site, assim como os demais documentos que versam sobre os tratamentos de dados que podem ser encontrados em nossas plataformas, passível de alteração a qualquer momento para adequação as regras estabelecidas pelas legislações que estabelecem o modo de tratamento dos dados.</p> 
                                <p className="mb--20">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um produto ou serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
                                <p className="mb--20">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                                <p className="mb--20">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                                <p className="mb--20">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
                                <p className="mb--20">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
                                <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.</p>
                                <h4>Informações Gerais:</h4>
                                <p className="mb--20">Nosso site se compromete a cumprir e respeitar os princípios previstos no art. 6º da Lei Geral de Proteção de dados, estando eles abaixo elencados e esclarecidos conforme ao tratamento de dados realizado por este site/aplicativo:</p>
                                <p className="mb--20"><strong>I- Princípio da Finalidade:</strong> Este site/aplicativo respeita o que prevê o princípio da finalidade trazido na legislação supracitada, realizando o tratamento com finalidade legítima e especifica, informando por meio desta Política de Privacidade e Segurança de forma explicita, aos titulares dos dados que serão tratados o motivo do tratamento.</p> 
                                <p className="mb--20">Nenhum tratamento será realizado de forma incompatível com as finalidades que serão informadas neste documento.</p> 
                                <p className="mb--20"><strong>II- Principio da Necessidade:</strong> Coletamos e tratamos apenas os dados necessários para a realização das finalidades explicitas do nosso site, com o compromisso de coletar e tratar o mínimo de informações do usuário do nosso site.</p>
                                <p className="mb--20">Utilizamos apenas as informações/dados pertinentes, proporcionais com a a atividade desempenhada por nós, sem exceder qualquer limite na relação existente entre o usuário e o nosso site/aplicativo, sendo todo e qualquer dado coletado e tratado conforme as finalidades estabelecidas em nossas páginas.</p>
                                <p className="mb--20"><strong>III- Principio da Adequação:</strong> Todo tratamento realizado em nossas páginas é compatível com as finalidades informadas para o usuário/cliente, respectivo titular dos dados, não sendo realizado nenhum tipo de ação ou mecanismo que seja incondizente e desrespeite o contexto de tratamento necessário.</p> 
                                <p className="mb--20"><strong>IV-Não discriminação:</strong> Os dados que coletamos, armazenamos e que realizamos qualquer tipo de tratamento não são utilizados para nenhum fim discriminatório, vexatório, ilícito ou abusivo.</p> 
                                <p className="mb--20"><strong>V- Principio da Qualidade dos dados:</strong> Garantimos aos titulares dos dados clareza e relevância no momento da coleta e do tratamento dos dados, além da possibilidade de atualização, conforme se fizer necessário para que seja cumprida a finalidade do tratamento, conforme a atividade que for realizada pelo usuário/cliente em nosso site.</p> 
                                <p className="mb--20"><strong>VI- Principio do Livre Acesso:</strong> Esclarecemos por meio desta Política de Privacidade e Segurança que garantimos a todos os titulares de dados que realizamos o tratamento, a consulta de maneira gratuita e fácil, a qualquer momento em que desejarem, por meio de um canal específico, sobre o tratamento realizado com os seus dados, assim como qualquer informação referente aos dados coletados, podendo inclusive acontecer atualização dos dados pessoais do titular, sem que a necessidade de qualquer requisição por parte do nosso site.</p> 
                                <p className="mb--20"><strong>VII-Principio da Prevenção:</strong> Adotamos e zelamos pela prevenção de todo e qualquer ato que possa gerar dano aos dados coletados dos usuários/cliente, com medidas implantadas em busca de prevenir qualquer situação incomoda, ilegal, ou que gere qualquer espécie de prejuízo/dano aos dados pessoais que realizamos tratamos.</p> 
                                <p className="mb--20"><strong>VIII–Principio da Transparência:</strong> Trabalhamos com clareza, precisão, exatidão e veracidade em todas as informações trazidas sobre o tratamento de dados, sendo o seu acesso fácil e disponível ao usuário/cliente nesta Política de Privacidade, bem como nos Termos de Uso no nosso site/aplicativo.</p> 
                                <p className="mb--20">As informações respectivas aos agentes de tratamento seguem o mesmo critério de transparência acima elencados. </p>
                                <p className="mb--20"><strong>Obs:</strong> Todas as informações trazidas sobre o tratamento e os agentes de tratamento respeitam os segredos comerciais e industriais.</p> 
                                <p className="mb--20"><strong>IX-Principio da Segurança:</strong> Informamos que utilizamos todas as medidas cabíveis e possíveis na seara técnica e administrativa, visando a maior proteção dos dados pessoais, desde o momento em que temos acesso a eles.</p>
                                <p className="mb--20">As técnicas utilizadas buscam proteger os dados pessoais de todo e qualquer acesso não autorizado, bem como de situações que possam causar danos ao titular dos dados, ainda que acidentais ou ilícitas.</p> 
                                <p className="mb--20">As técnicas que utilizamos buscam trazer segurança e proteção ao titular dos dados que realizamos o tratamento, visto que são tomadas em busca de prevenir e proteger as informações coletadas de qualquer situação ilícita de perda, destruição, compartilhamento, comunicação ou difusão não autorizada.</p>
                                <p className="mb--20"><strong>X-Principio da responsabilização e prestação de contas:</strong> O agente irá demonstrar e comprovar que cumpre e respeita todas as normas cabíveis a Proteção de Dados Pessoais, adotando medidas adequadas para isso de maneira eficaz.</p> 
                                <p>O nosso site realiza todas as etapas referentes ao tratamento de dados pessoais dos usuários/clientes que o acessam, sem desrespeitar qualquer norma ou princípio presente na Lei 13.709/2018, tendo de forma clara e objetiva o fundamento da finalidade para o tratamento de cada informação pessoal coletada.</p>
                                <h4>Lei Geral de Proteção de Dados (LGPD)</h4>
                                <p className="mb--20">Esta parte do documento se integra e complementa as informações contidas no resto desta política de privacidade e é fornecida pela entidade que opera este Aplicativo e, conforme for o caso, suas controladoras, subsidiárias e afiliadas (para fins desta seção, doravante denominadas em conjunto através dos pronomes "nós", "nos", "nosso" e "conosco").</p>
                                <p className="mb--20">As disposições contidas nesta seção aplicar-se-ão a todos os Usuários que sejam residentes no Brasil, de acordo com a "Lei geral de Proteção de Dados" (os Usuários serão doravante denominados através dos pronomes "você" e "seu").</p>
                                <p className="mb--20">Para tais Usuários, estas disposições substituem todas as outras disposições possivelmente divergentes ou conflitantes contidas nesta política de privacidade.</p>
                                <p>Esta parte do documento usa o termo "informações pessoais", conforme definido na Lei Geral de Proteção de Dados Pessoais (<b>LGPD</b>) <a title='Lei 13.709/18' target={'_blank'} href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm">Lei n° 13.709/2018.</a></p>
                                <h4>Forma de coleta de dados</h4>
                                <p className="mb--20">A coleta de dados dos nossos usuários/cliente acontece respeitando todos os princípios e normas trazidos na Lei Geral de Proteção de Dados, principalmente o princípio da finalidade, necessidade e adequação, com a condição expressa de consentimento livre e espontâneo do usuário para isso, visto que não realizamos nenhum tratamento sem permissão do usuário/cliente ou seu responsável.</p> 

                                <p className="mb--20">Não utilizamos nenhum meio coercivo, autoritário, opressor, repressivo ou abusivo em busca de receber o consentimento do usuário para o tratamento de seus dados.</p>

                                <p className="mb--20">Utilizamos o legitimo interesse como embasamento para a coleta e tratamento do processamento de determinados dados dos usuários/visitantes do nosso site, sendo esses dados, após concluir a finalidade a que se destinam excluídos ou anonimizados, em busca de garantir a melhor proteção ao usuário.</p>

                                <p className="mb--20">A tabela abaixo informa como acontece a coleta dos dados:</p>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Dado</th>
                                            <th>Como acontece a coleta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dados pessoais do usuário</td>
                                            <td>Coletados por meio de formulários e comentários.</td>
                                        </tr>
                                        <tr>
                                            <td>Dados do dispositivo</td>
                                            <td>Coletados/Transmitidos/Transferidos pelo acesso ao serviço que acontece por meio da internet</td>
                                        </tr>
                                        <tr>
                                            <td>Registro de acesso</td>
                                            <td>Coletado/Transmitidos/Transferidos pelo acesso ao serviço que acontece por meio da internet</td>
                                        </tr>
                                        <tr>
                                            <td>Dados de navegação</td>
                                            <td>Coletados por meio de cookies durante a navegação no site.&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="mb--20">A coleta de dados pessoais pode acontecer em diversos locais, páginas e abas do nosso site, por meio de preenchimento de formulários, FAQS, chat, comentários e cadastros necessários para o envio de materiais, realização de compras ou envio de informações.</p>
                                <p className="mb--20">O registro de acesso, assim como, os dados do dispositivo são coletados para a segurança do usuário/cliente bem como dos parceiros, proprietário do site e toda a sua equipe por meio do acesso ao serviço que disponibilizamos, que acontece no momento do acesso a nossa página.</p>

                                <p className="mb--20">Em busca de um desempenho cada vez melhor direcionado ao nosso usuário/visitante, tal como, desejando conhecer melhor o nosso público trabalhamos com alguns mecanismos e plataformas que realizam a coleta de dados de nossos usuários/cliente automaticamente diretamente pelo sistema, sendo respeitadas todas as regras da LGPD, assim como a privacidade do usuário, proporcionando todos os meios técnicos e administrativos de segurança.</p>

                                <h4>Dados não coletados</h4>
                                <p className="mb--20">Respeitando os princípios contidos no início desta Política de Privacidade e Segurança não realizamos a coleta de nenhum dado que não seja necessário para os serviços que prestamos, ou que tenha finalidade diversa das informadas.</p>

                                <p className="mb--20">Ademais, é imprescindível  esclarecermos que ao ser redirecionado para a nossa página por meio de anúncios em sites terceiros, a coleta de dados que é realizada pelo site que deu origem ao acesso a nossa página não é vinculada de nenhuma forma como o tratamento de informações que realizamos.</p>

                                <p>Não coletamos dados sensíveis, exceto em casos onde houver determinação legal para isso, sendo informado o usuário de forma expressa da necessidade de tratamento caso venha a existir, bem como o tratamento que será realizado com ele.</p>
                                <p className="mb--20">Dados de navegação são coletados pelos nossos cookies a partir do momento em que se inicia a navegação no nosso site/aplicativo.</p>
                                <h4 className="mb--20">Política de Cookies</h4>
                                <h5>O que são cookies?</h5>
                                <p className="mb--20">Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou “quebrar” certos elementos da funcionalidade do site.</p>
                                <h5>Como usamos os cookies?</h5>
                                <p className="mb--20">Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.</p>
                                <h5>Desativar cookies</h5>
                                <p className="mb--20">Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>
                                <h4 className="mb--20">Cookies que definimos</h4>
                                <h5>Cookies relacionados à conta</h5>
                                <p className="mb--20">Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.</p>
                                <h5>Cookies relacionados a boletins por e-mail</h5>
                                <p className="mb--20">Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.</p>
                                <h5>Cookies relacionados a pesquisas</h5>
                                <p className="mb--20">Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.</p>
                                <h5>Cookies relacionados a formulários</h5>
                                <p className="mb--20">Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.</p>
                                <h5>Cookies de preferências do site</h5>
                                <p className="mb--20">Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.</p>
                                <h4 className="mb--20">Política de Cookies</h4>
                                <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>
                                <p><b>Google Analytics:</b> uma das soluções de análise mais difundidas e confiáveis da web, nos ajuda a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.</p>
                                <p className="mb--20">Periodicamente, testamos novos recursos e fazemos alterações sutis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.</p>

                                <h4>Atualizações desta Politica de Privacidade e Segurança</h4>
                                <p className="mb--20">Estamos passando por um momento de implementação em todo nosso site, por esse motivo melhorias estão acontecendo a todo momento em nossa política de Privacidade e Segurança, assim como nos demais documentos a versar sobre o tema, por isso, utilizamos este espaço, para lhe pedir que sempre antes de utilizar qualquer um dos nossos serviços ou navegar pelo nosso site dirija-se até está página, para que assim, você não fique por fora de nenhuma das nossas atualizações.</p>
                                <p className="mb--20">Você poderá ter ciência por meio dessa página da alteração deste documento através da data de atualização encontrada ao final da presente Política de Privacidade e Segurança.</p>
                                <p className="mb--20">Realizaremos a notificação de qualquer atualização apenas e somente para aqueles usuários/visitantes que possuem cadastro em nosso sistema, por meio de e-mail, SMS ou notificação instantânea.</p>
                                <p className="mb--20">Informamos ainda, que caso o usuário/visitante possua cadastro em nossa plataforma, mas não tenha informado nenhum meio de contato, não há possibilidade de realizarmos a notificação de atualização deste instrumento, assim é de única e total responsabilidade desse usuário/visitante visitar esta página e checar os itens modificados.</p>
                                <p>O acesso ao nosso site após as atualizações desta página, demonstram que o usuário/visitante aceitou e concordou com todos os itens contidos nela e nos demais documentos vinculados a ela. Inclusive aos itens modificados datadas até o momento do acesso dele.</p>
                                <h4>Mais Informações</h4>
                                <p className="mb--20">Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                                <h4 className="mb--20">Aceite da Política de Privacidade</h4>
                                <p className="mb--20">É muito bom saber que Você chegou até aqui!</p>
                                <p className="mb--20">Agora que Você tem todas as informações necessárias, só precisa entender que ao aceitar nossa política de privacidade, Você declara ter capacidade legal, dando o seu consentimento expresso para tudo que foi apresentado nela.</p>
                                <p className="mb--20">Caso Você ainda não tenha completado seus 12 (doze) anos de idade, não esqueça de pedir ajuda para o papai ou para a mamãe para concordar com a nossa Política de Privacidade.</p>
                                <p className="mb--20">Agradecemos por chegar até aqui! Dúvidas ou considerações, manda um e-mail para dpo@ds3i.com.br ou até pode mandar no chat do nosso site, que responderemos o quanto antes!</p>
                                <p className="mb--20">Atenciosamente, equipe de Desenvolvimento da DS3I.</p>
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

export default PrivacyPolicy;