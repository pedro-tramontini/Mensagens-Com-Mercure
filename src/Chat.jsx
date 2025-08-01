import { Avatar, ChatContainer, Conversation, ConversationHeader, ConversationList, ExpansionPanel, MainContainer, Message, MessageInput, MessageList, Search, Sidebar, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.css';
import { useEffect, useState } from 'react';
import { useMercure } from './contexts/MercureContext';

const Chat = () => {

    // json onde estão as mensagens
    const [mensagens, setMensagens] = useState([
        {
            id_mensagem: '1',
            id_enviado: '1',
            id_recebido: '2',
            message: 'You work today??',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:00:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status_lido: 'true'
        },
    ])

    // json com a lista de contatos
    const [contatos, setContatos] = useState([
        {
            id: '1',
            name: 'Jhon',
            src: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg?w=360'
        },
        {
            id: '2',
            name: 'Marie',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5sFjZPx1Yzi1b9_FpQzrxqgsjv2DPAp81Q&s'
        },
        {
            id: '3',
            name: 'Marco',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpcCcQNUGyTpt1jjsWPZVrdEvPHO3kr7Tdg&s'
        },
        {
            id: '4',
            name: 'João Marcelo',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s'
        },
        {
            id: '5',
            name: 'Matheus',
            src: 'https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315_640.png'
        },
        {
            id: '6',
            name: 'Marye',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s'
        },
        {
            id: '7',
            name: 'Gabrielle',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-2MVGTaluJdhDzyMMpwrhv2AVw3NfnDLbw&s'
        },
        {
            id: 'me',
            name: 'Meu Contato',
            src: 'https://wallpapers.com/images/hd/profile-picture-xj8jigxkai9jag4g.jpg'
        }
    ])

    const [contatoSelecionado, setContatoSelecionado] = useState(null)

    // Função para setar que a mensagem foi lida
    const setarLido = (idContato) => {
        
        setHandleSideBar(idContato === contatoSelecionado && false)
        setContatoSelecionado(idContato)
        setMensagens(prevMensagens => 
            prevMensagens.map(mensagem => 
                idContato === mensagem.id_enviado 
                    ? { ...mensagem, status_lido: 'true' }
                    : mensagem
                )
            );
        };


    const sendMessage = (message, contatoSelecionado) => {
    const uuid = crypto.randomUUID();

        setMensagens([...mensagens, {
            id_mensagem: uuid,
            id_enviado: contatoSelecionado,
            id_recebido: contatoSelecionado,
            message: message,
            sender: 'me',
            sentTime: '2023-03-15T12:35:00.000Z',
            direction: 'outgoing',
            tipo: 'text',
            src: '',
            status_lido: 'true'
        }])
        console.log(mensagens)
    };
    
    const {conteudoMercure}  = useMercure()

    useEffect(() => {
        if (Object.keys(conteudoMercure).length === 0)
            return

        console.log('id_Mensagem Mercure', conteudoMercure.id_mensagem)
        console.log('conteudoMensagem', conteudoMercure.message)

        setMensagens([...mensagens, {
            id_mensagem: conteudoMercure.id_mensagem,
            id_enviado: conteudoMercure.id_enviado,
            id_recebido: conteudoMercure.id_recebido,
            message: conteudoMercure.message,
            sender: conteudoMercure.sender,
            sentTime: conteudoMercure.sentTime,
            direction: conteudoMercure.direction,
            tipo: conteudoMercure.tipo,
            src: conteudoMercure.src,
            status_lido: conteudoMercure.status_lido
        }])

        setMensagens(prevMensagens => 
        prevMensagens.map(mensagem => 
            contatoSelecionado === mensagem.id_enviado 
                ? { ...mensagem, status_lido: 'true' }
                : mensagem
            )
        );

    }, [conteudoMercure])

    const [search, setSearch] = useState('')
    console.log(search)

    const [handleSideBar, setHandleSideBar] = useState(false)

    const abrirSideBar = (id) => {
        if (id === contatoSelecionado) {
            setHandleSideBar(!handleSideBar)
        } else {
            setHandleSideBar(false)
        }
    }

return (    //Aqui começa o jsx

<div>
  <MainContainer style={{height: '100vh'}}>
    <Sidebar position='left' style={{overflow: 'hidden'}}>

        <Search
            placeholder="Search..."
            onChange={(e) => setSearch(e)}
            value={search}
            onClearClick={() => setSearch("")}
        />
        <ConversationList >
            {contatos.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) || item.name.includes(search) 
            }).map(({id, name, src}) => {

                const mensagensNaoLidas = mensagens.filter(({id_enviado, status_lido}) => id_enviado === id && status_lido === 'false').length

                if (id === contatoSelecionado) {
                    return (
                    <Conversation key={id} name={name} lastSenderName={name} info='hello' active onClick={() => setHandleSideBar(id === contatoSelecionado && false)}>
                        <Avatar src={src} status='available'/>
                    </Conversation>
                    )
                } else {
                    return (
                    <Conversation key={id} name={name} lastSenderName={name} info='hello' unreadCnt={mensagensNaoLidas > 9 ? '9+' : mensagensNaoLidas} onClick={() => setarLido(id)} >
                        <Avatar src={src} status='available'/>
                    </Conversation>
                    )
                }
            }
        )}
        </ConversationList>
    </Sidebar>

    <ChatContainer>
        {contatos.map(({id, name, src}) => (contatoSelecionado === id && (
            <ConversationHeader onClick={() => abrirSideBar(id)}>
                <Avatar src={src} status='dnd'/>
                <ConversationHeader.Content key={id} userName={name} info='last activer 10 min. ago'></ConversationHeader.Content>
            </ConversationHeader>
            ))
        )}
        
        <MessageList>
            {mensagens.map(({id_enviado, id_mensagem, message, sender, sentTime, direction, tipo, src, type}) => (id_enviado === contatoSelecionado && (
                tipo === 'text' ? (
                    <Message key={id_mensagem} style={{width: '50%'}} type={type} model={{
                        message: message,
                        sender: sender,
                        sentTime: sentTime,
                        direction: direction, 
                    }
                } avatarSpacer >
                    <Message.Footer>{sentTime}</Message.Footer>
                </Message>
                
                ) :
                tipo === 'image' && (
                <Message key={id_mensagem} model={{direction: direction, message: message}} avatarSpacer>
                    <Message.CustomContent>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img
                            src={src}
                            alt='Erro na imagem'
                            style={{width: '330px', height: '186.63px', borderRadius: 8}}
                            />
                        <span style={{marginTop: 6, fontSize: '0.85rem', color: 'black'}} >
                            {message}
                        </span>
                    </div>
                    </Message.CustomContent>
                    <Message.Footer>{sentTime}</Message.Footer>
                </Message>
                )
            ))
        )}

        </MessageList>
        
    {contatoSelecionado !== null && (
        <MessageInput placeholder='Type your message here...' onSend={(e) => sendMessage(e, contatoSelecionado)}>
        </MessageInput>
    )}

    </ChatContainer>

    {handleSideBar === true && (
        <Sidebar position="right">
            <ExpansionPanel
            open
            title="INFO"
            >
                <p>
                    Lorem ipsum
                </p>
                <p>
                    Lorem ipsum
                </p>
                <p>
                    Lorem ipsum
                </p>
                <p>
                    Lorem ipsum
                </p>
            </ExpansionPanel>
        </Sidebar>

     )

}
    
  </MainContainer>
</div>
    )
}

export default Chat