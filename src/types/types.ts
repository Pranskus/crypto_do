export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface CreateContractPageProps {
  onClose: () => void;
}

export interface Step {
  title: string;
  description: string;
}
