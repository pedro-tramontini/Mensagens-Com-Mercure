import { Avatar, ChatContainer, Conversation, ConversationHeader, ConversationList, MainContainer, Message, MessageInput, MessageList, Sidebar, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.css';
import { useEffect, useState } from 'react';
import { useMercure } from './contexts/MercureContext';

const Chat = () => {

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
            status: 'true'
        },
        {
            id_mensagem: '2',
            id_enviado: '1',
            id_recebido: '2',
            message: 'Today?',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:05:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '3',
            id_enviado: '1',
            id_recebido: '2',
            message: 'Hello??',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:10:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '4',
            id_enviado: '1',
            id_recebido: '2',
            message: 'Como vai voce?',
            sender: 'Jhon',
            sentTime: '2023-03-15 12:15:00.000',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '5',
            id_enviado: '1',
            id_recebido: '2',
            message: 'Very Good',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:20:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '6',
            id_enviado: '2',
            id_recebido: '2',
            message: 'Very Good',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:25:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '7',
            id_enviado: '2',
            id_recebido: '2',
            message: 'Very Good',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:30:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '8',
            id_enviado: '4',
            id_recebido: '2',
            message: 'Very Good',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:35:00.000Z',
            direction: 'incoming',
            tipo: 'text',
            status: 'true'
        },
        {
            id_mensagem: '9',
            id_enviado: '1',
            id_recebido: '2',
            message: 'Very Good',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:35:00.000Z',
            direction: 'incoming',
            tipo: 'image',
            src: 'https://media.istockphoto.com/id/133835367/pt/foto/fogo-alphabets-t.jpg?s=1024x1024&w=is&k=20&c=AO0Tid_EKvZNXkNtSHSxiBvcNECBYuAcfwC-AC7XCCA=',
            status: 'true'
        },
        {
            id_mensagem: '10',
            id_enviado: '2',
            id_recebido: '2',
            message: 'Very Good',
            sender: 'Jhon',
            sentTime: '2023-03-15T12:35:00.000Z',
            direction: 'outgoing',
            tipo: 'image',
            src: 'https://media.istockphoto.com/id/133835367/pt/foto/fogo-alphabets-t.jpg?s=1024x1024&w=is&k=20&c=AO0Tid_EKvZNXkNtSHSxiBvcNECBYuAcfwC-AC7XCCA=',
            status: 'true'
        },
    ])

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
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-2MVGTaluJdhDzyMMpwrhv2AVw3NfnDLbw&s'
        }
    ])

    const [selecionado, setSelecionado] = useState(null)

    const setarLido = (id) => {
    setSelecionado(id)

    setMensagens(prevMensagens => 
        prevMensagens.map(mensagem => 
            id === mensagem.id_enviado 
                ? { ...mensagem, status: 'true' }
                : mensagem
            )
        );
    };

//     const sendMessage = ({message, selecionado}) => {
//     const uuid = crypto.randomUUID();

//         setMensagens([...mensagens, {
//             id_mensagem: uuid,
//             id_enviado: '1',
//             id_recebido: conteudoMercure.id_recebido,
//             message: conteudoMercure.message,
//             sender: conteudoMercure.sender,
//             sentTime: conteudoMercure.sentTime,
//             direction: conteudoMercure.direction,
//             tipo: conteudoMercure.tipo,
//             src: conteudoMercure.src,
//             status: conteudoMercure.status
//         }])
//     );
// };
    
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
            status: conteudoMercure.status
        }])

        setMensagens(prevMensagens => 
        prevMensagens.map(mensagem => 
            selecionado === mensagem.id_enviado 
                ? { ...mensagem, status: 'true' }
                : mensagem
            )
        );

    }, [conteudoMercure])

    return (
       <div>
    
    
  <MainContainer style={{height: '100vh'}}>
    <Sidebar position='left' style={{overflow: 'hidden'}}>
        <ConversationList>

            {contatos.map((elemento) => {
                const mensagensNaoLidas = mensagens.filter((e) => e.id_enviado === elemento.id && e.status === 'false').length
                console.log(mensagensNaoLidas) 

                if (elemento.id === selecionado) {
                    return (
                    <Conversation key={elemento.id} name={elemento.name} lastSenderName={elemento.name} info='hello' active>
                        <Avatar src={elemento.src} status='available'/>
                    </Conversation>
                    )
                } else {
                    return (
                    <Conversation key={elemento.id} name={elemento.name} lastSenderName={elemento.name} info='hello' unreadCnt={mensagensNaoLidas > 9 ? '9+' : mensagensNaoLidas} onClick={() => setarLido(elemento.id)} >
                        <Avatar src={elemento.src} status='available'/>
                    </Conversation>
                    )
                }
            })}
        </ConversationList>
    </Sidebar>
    <ChatContainer>

    {contatos.map((elemento) => (selecionado === elemento.id && (
        <ConversationHeader>
            <Avatar src={elemento.src} status='dnd'/>
            <ConversationHeader.Content key={elemento.id} userName={elemento.name} info='last activer 10 min. ago'></ConversationHeader.Content>
        </ConversationHeader>
        ))
    )}
        
        <MessageList>
            {mensagens.map((e) => (e.id_enviado === selecionado && (
                e.tipo === 'text' ? (
                <Message key={e.id_mensagem} style={{width: '50%'}} type={e.type} model={{
                    message: e.message,
                    sender: e.sender,
                    sentTime: e.sentTime,
                    direction: e.direction,
                }
            } avatarSpacer >
                </Message>
                ) :
                e.tipo === 'image' && (
                <Message key={e.id_mensagem} model={{direction: e.direction, message: e.message}} avatarSpacer>
                    {/* <Message.ImageContent src={e.src} alt="ERRO NA MENSAGEM" width={200}/> */}
                    <Message.CustomContent>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img
                            src={e.src}
                            alt='Erro na imagem'
                            width={200}
                            style={{borderRadius: 8}} 
                            />
                        <span style={{marginTop: 6, fontSize: '0.85rem', color: 'black'}}>
                            {e.message}
                        </span>
                    </div>
                    </Message.CustomContent>
                </Message>
                )
            ))
        )}

        </MessageList>
        <MessageInput placeholder='Type your message here...' onSend={(e) => sendMessage({e, selecionado})}>

        </MessageInput>
    </ChatContainer>
    
  </MainContainer>
</div>
    )
}

export default Chat