import { Loading } from "react-daisyui";
import { IChatConversationsProps } from "./types";
import { ChatMessage } from "./ChatMessage";
import { useEffect } from "react";

export const ChatConversations = ({ conversations, isQuerying, chatConversationsContainerRef }: IChatConversationsProps) => {
  useEffect(() => {
    const chatConversationsContainer = chatConversationsContainerRef.current;
    if (chatConversationsContainer) {
      chatConversationsContainer.scrollTo({
        top: chatConversationsContainer.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [conversations]);

  return (
    <div className="w-full">
      {conversations && conversations.map((chatEntry) => (
        <ChatMessage
          key={`chatbot-message-${chatEntry.id}`}
          message={chatEntry}
        />
      ))}
      {isQuerying && (
        <Loading className="mt-4 ml-16 bg-amber-300" variant="dots" size="lg" />
      )}
    </div>
  );
};
