import { Sermon } from '../types';

/**
 * Generates an inspiring, beautifully formatted WhatsApp message containing exclusively
 * the scripture verse and reference, perfect for quick morning encouragement.
 */
export function getVerseShareText(sermon: Sermon): string {
  return (
    `📖 *Versículo do Dia — Mulher Plena*\n\n` +
    `"${sermon.scriptureVerseText}"\n` +
    `— *${sermon.scripture}*\n\n` +
    `🌸 _Que a paz do Senhor renove suas forças e traga descanso ao seu coração hoje!_\n` +
    `🕊️ *Devocional Mulher Plena & Restaurada*`
  );
}

/**
 * Generates the complete devotional WhatsApp message including scripture, reflection,
 * declaration of faith, and prayer.
 */
export function getFullSermonShareText(sermon: Sermon): string {
  return (
    `🌸 *Mulher Plena — Devocional da Mulher Cristã*\n` +
    `📖 *Mensagem #${sermon.num}: ${sermon.title}*\n\n` +
    `🕊️ *Versículo-Base:* "${sermon.scriptureVerseText}" (${sermon.scripture})\n\n` +
    `💡 *Reflexão:* "${sermon.theme}"\n\n` +
    `✨ *Palavra de Fé:* ${sermon.faith}\n\n` +
    `🙏 *Oração:* "${sermon.prayer}"\n\n` +
    `_Que esta palavra abençoe profundamente sua vida hoje! Compartilhe com uma mulher especial._`
  );
}

/**
 * Opens WhatsApp with the pre-filled encoded text safely,
 * avoiding iframe/popup blocker restrictions.
 */
export function shareOnWhatsApp(text: string): boolean {
  const encoded = encodeURIComponent(text);
  const url = `https://api.whatsapp.com/send?text=${encoded}`;
  
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 200);
    return true;
  } catch (err) {
    console.warn('Anchor click failed, falling back to window.open', err);
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
      return true;
    } catch {
      return false;
    }
  }
}
