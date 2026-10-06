export interface ModelItem {
  id: number;
  title: string;
  category: string;
  tag: string;
  imageUrl: string;
  description: string;
}

export const CHECKOUT_URL = "https://pay.cakto.com.br/zicgdc9_1178529";
export const PRODUCT_PRICE = "R$ 10,00";

export const NFC_MODELS: ModelItem[] = [
  {
    id: 1,
    title: "Placa Google Avaliações v1",
    category: "Google Meu Negócio",
    tag: "Alta Conversão",
    imageUrl: "https://i.postimg.cc/rs6BdFKc/Google-01-2.jpg",
    description: "Modelo ideal para balcões e recepções, incentivando clientes a deixarem avaliação no Google em segundos via NFC ou QR Code."
  },
  {
    id: 2,
    title: "Placa Avalie no Google v2",
    category: "Google Meu Negócio",
    tag: "Design Clean",
    imageUrl: "https://i.postimg.cc/HnQfbDyL/Google-01-4.jpg",
    description: "Layout moderno com destaque para 5 estrelas e instruções visuais claras para aproximação por smartphone."
  },
  {
    id: 3,
    title: "Placa Instagram Conecte",
    category: "Instagram & Redes",
    tag: "Mais Seguidores",
    imageUrl: "https://i.postimg.cc/WzMQ0LkM/Insta-modelo-2.jpg",
    description: "Perfeita para lojas, restaurantes e consultórios aumentarem seguidores no Instagram de forma instantânea."
  },
  {
    id: 4,
    title: "Placa Google Review 5 Estrelas",
    category: "Google Meu Negócio",
    tag: "Profissional",
    imageUrl: "https://i.postimg.cc/KjndtSMF/Google-01-3.jpg",
    description: "Visual premium com contraste marcante para aumentar a autoridade e reputação do negócio local."
  },
  {
    id: 5,
    title: "Placa Google Avaliações v3",
    category: "Google Meu Negócio",
    tag: "Tecnológico",
    imageUrl: "https://i.postimg.cc/prDgKbFy/Google-01-5.jpg",
    description: "Composição harmônica com ícones de NFC e QR Code prontos para personalização rápida com os dados do cliente."
  },
  {
    id: 6,
    title: "Placa WhatsApp Contato Direto",
    category: "WhatsApp Comercial",
    tag: "Atendimento Rápido",
    imageUrl: "https://i.postimg.cc/MHyh12QS/Whats-App.jpg",
    description: "Facilite pedidos, orçamentos e agendamentos diretos no WhatsApp com apenas um toque do smartphone."
  }
];
