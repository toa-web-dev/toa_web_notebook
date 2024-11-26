/**
 * @prop {string} chatText
 * @returns {HTMLDivElement} $bubble HTMLDivElement
 */
export const ChatBubble = (chatText) => {
  const $bubble = document.createElement("div");
  $bubble.classList.add("chat_bubble")
  const $p = document.createElement("p");
  $p.classList.add("chat_text")
  const text = chatText.trim();
  $p.innerText = text;

  $bubble.appendChild($p);
  return $bubble;
};