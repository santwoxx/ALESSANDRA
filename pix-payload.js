/**
 * Módulo Oficial de Geração de Pix BR Code (Banco Central do Brasil / EMV)
 * Chave: 73988411342 (Alessandra - Equipe da Cozinha Campal)
 */

class PixBRCode {
  static CRC16_CCITT(str) {
    let crc = 0xFFFF;
    for (let c = 0; c < str.length; c++) {
      crc ^= str.charCodeAt(c) << 8;
      for (let i = 0; i < 8; i++) {
        if (crc & 0x8000) {
          crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
        } else {
          crc = (crc << 1) & 0xFFFF;
        }
      }
    }
    const hex = crc.toString(16).toUpperCase();
    return hex.padStart(4, '0');
  }

  static formatField(id, value) {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  }

  static generate({ key, name = 'ALESSANDRA', city = 'ILHEUS', amount = 0, txid = 'CAMPAL' }) {
    // 00: Payload Format Indicator
    let payload = this.formatField('00', '01');

    // 26: Merchant Account Information
    const gui = this.formatField('00', 'br.gov.bcb.pix');
    const keyField = this.formatField('01', key);
    payload += this.formatField('26', `${gui}${keyField}`);

    // 52: Merchant Category Code
    payload += this.formatField('52', '0000');

    // 53: Transaction Currency (986 = Real BRL)
    payload += this.formatField('53', '986');

    // 54: Transaction Amount
    if (amount && Number(amount) > 0) {
      const formattedAmount = Number(amount).toFixed(2);
      payload += this.formatField('54', formattedAmount);
    }

    // 58: Country Code
    payload += this.formatField('58', 'BR');

    // 59: Merchant Name
    const sanitizedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').substring(0, 25).toUpperCase();
    payload += this.formatField('59', sanitizedName);

    // 60: Merchant City
    const sanitizedCity = city.normalize('NFD').replace(/[\u0300-\u036f]/g, '').substring(0, 15).toUpperCase();
    payload += this.formatField('60', sanitizedCity);

    // 62: Additional Data Field Template (txid)
    const cleanTxid = (txid || 'CAMPAL').replace(/[^a-zA-Z0-9]/g, '').substring(0, 25) || 'CAMPAL';
    const txidField = this.formatField('05', cleanTxid);
    payload += this.formatField('62', txidField);

    // 63: CRC16
    payload += '6304';
    const crc = this.CRC16_CCITT(payload);
    return payload + crc;
  }
}

// Configuração padrão da Chef Alessandra
window.CHEF_PIX_CONFIG = {
  key: '73988411342',
  name: 'ALESSANDRA',
  city: 'ILHEUS',
  phoneFormatted: '(73) 98841-1342',
  whatsappRaw: '5573988411342',
  team: 'Equipe da Cozinha - Campal'
};

window.PixBRCode = PixBRCode;
