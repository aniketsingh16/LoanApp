import './whatsapp-button.scss'; 
import Image from 'next/image';

const WhatsappButton = () => (
  <div className="whatsapp-button">
    <a href="https://wa.me/8076373232" target="_blank" rel="noopener noreferrer">
      <Image
        src="/img/svg/whatsapp-logo.png"  // Adjust path as necessary
        alt="WhatsApp"
        className="whatsapp-icon"
        width={60}
        height={60}
      />
    </a>
  </div>
);

export default WhatsappButton;