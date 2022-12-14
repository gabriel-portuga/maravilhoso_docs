import React from 'react';
import { Text, FlatList} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import { AvatarContainer, AvatarImage, ContainerGeral, ContainerItensList, Titulo } from "../../styles";

export default function Artigos() {
  
    const Artigos = [ 
        {id:"0", title:"Contos Folclóricos e Lendas Brasileiras", autor:"Jossi Borges",image: require('../../../assets/artigos_default.png'), pagina: 'https://www.companhiadasletras.com.br/trechos/41096.pdf'}, // Mudar para ARTIGO

        {id:"1", title:"Lendas Brasileiras", autor:"Luis Camara Cascudo", image: require('../../../assets/artigos_default.png'), pagina: 'http://www.multirio.rj.gov.br/media/PDF/pdf_4251.pdf'}, // Mudar para ARTIGO

        {id:"2", title:"O Orfanato da Srta. Peregrine", autor:"Riggs Ransom", image: require('../../../assets/artigos_default.png'), pagina: 'https://www.intrinseca.com.br/upload/livros/1%C2%BACAP_CidadesDosEtereos_ISSUU.pdf'}, // Mudar para ARTIGO

        {id:"3", title:"A Literatura fantástica como incentivo à Leitura", autor:"Braga(UEPB), Bezerra(UEPB)", image: require('../../../assets/artigos_default.png'), pagina: 'https://editorarealize.com.br/editora/anais/enlije/2014/Modalidade_1datahora_25_05_2014_19_40_09_idinscrito_745_be3f4be712591bb9aaf5d315d23844a9.pdf'}, // OK

        {id:"4", title:"Nas trilhas do maravilhoso: a fada", autor:"Regina Michelli(UERJ)", image: require('../../../assets/artigos_default.png'), pagina: 'http://www.uel.br/pos/letras/terraroxa/g_pdf/vol26/TR26e.pdf'}, // Ok

        {id:"5", title:"Era uma vez...e agora o final é diferente", autor:"Luana de Oliveira(UNICENTRO)", image: require('../../../assets/artigos_default.png'), pagina: 'https://anais.unicentro.br/xixeaic/pdf/1842.pdf'}, // Ok

        {id:"6", title:"O Conto dos Contos", autor:"Francisco Degani", image: require('../../../assets/artigos_default.png'), pagina: 'https://repositorio.ufsc.br/bitstream/handle/123456789/209914/DEGANI%2C%20Francisco.%20_O%20conto%20dos%20contos_%2C%20de%20Giambattista%20Basile.pdf?sequence=1&isAllowed=y'} // Ok
    ]

    const Item = ({ title, autor, image, onPress }) => (

        <ContainerItensList>
            <AvatarContainer height='120px' width='24%' onPress={(onPress)}>
                <AvatarImage style={{resizeMode:'stretch'}} source={ image }/>
            </AvatarContainer>

            <AvatarContainer height='120px' width='76%' justifyContent='center'>
                <Titulo size='24px' margin='0px 0px 0px 16px' alignSelf='flex-start' color='branco'>{title}</Titulo>
                <Titulo size='16px' margin='0px 0px 0px 16px' alignSelf='flex-start' color='branco'>{autor}</Titulo>
                <Text style={{ marginLeft: 16, alignSelf: 'flex-start'}}> {'<- Click aqui'}</Text>
            </AvatarContainer>    
        </ContainerItensList>
      );

    const renderItem = ({ item }) => (
        <Item 
        title={item.title} 
        autor={item.autor} 
        image={item.image}
        onPress={() => OpenAnything.Open(item.pagina)}
        />
    );

    return (
        <ContainerGeral>
          <Titulo alignSelf='center' color='branco' size='40px' margin='16px 0px 0px 0px'>Artigos</Titulo>
          <FlatList
            data={Artigos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ContainerGeral>
    );
}
