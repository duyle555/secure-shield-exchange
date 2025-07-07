import React from 'react';

interface WalletConnectButtonProps {
  walletName: string;
  walletLogoUrl: string;
  onConnect: () => void;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({ 
  walletName, 
  walletLogoUrl, 
  onConnect 
}) => {
  return (
    <button
      onClick={onConnect}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800/50 hover:border-violet-500/50 transition-all duration-300 group"
    >
      <img 
        src={walletLogoUrl} 
        alt={`${walletName} logo`} 
        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
        }}
      />
      <span>Kết nối với {walletName}</span>
    </button>
  );
};

export default WalletConnectButton;