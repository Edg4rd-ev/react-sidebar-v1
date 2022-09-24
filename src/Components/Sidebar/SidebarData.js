import React from 'react'
import { MdChatBubble, MdContacts, MdLeaderboard, MdFunctions, MdSettings} from "react-icons/md";

export const SidebarData = [
    {
        title: "Atendimento",
        icon: <MdChatBubble />,
        link: "/atendimento"
    },
    {
        title: "Contatos",
        icon: <MdContacts />,
        link: "/contatos"
    },
    {
        title: "Dashboard",
        icon: <MdLeaderboard />,
        link: "/dashboard"
    },
    {
        title: "Funcionalidades",
        icon: <MdFunctions />,
        link: "/funcionalidades"
    },
    {
        title: "Configurações",
        icon: <MdSettings />,
        link: "/configuracoes"
    }
] 